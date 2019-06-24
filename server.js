
// Set up server connection
const express = require('express');
const path = require('path');
const port = 8080; 

const app = express();
app.listen(port, function (){
    console.log('Listening...');
});

// Set up Translate API Usage
const APIrequest = require('request');
const http = require('http');

const APIkey = "AIzaSyASA6UAaiHkeRRrA_-Vx0Q6dFMs0CLsOJk"; 
const url = "https://translation.googleapis.com/language/translate/v2?key="+APIkey

// Set up Login and User Authentication
const passport = require('passport');
const cookieSession = require('cookie-session');
const sqlite = require('sqlite3');
const GoogleLogin = require('passport-google-oauth20');

// Need to configure
const GoogleLoginData = {
    clientID: '293229937557-g2ig70pnt75k1d1ir3gc1f24smdnk38j.apps.googleusercontent.com',
    clientSecret: 'LpQtBbqh83jGUxTC_zScOYU_',
    callbackURL: '/auth/redirect'
};

passport.use(new GoogleLogin(GoogleLoginData, function (accessToken, refreshToken, profile, done) {
    console.log("Google profile", profile);
}));

app.use(cookieSession({
    maxAge: 6 * 60 * 60 * 1000,
    // meaningless random string used for encryption
    keys: ['hanger waldo mercy dance']
}));

app.use(passport.initialize());
app.use(passport.session());

//---------------------------------------------------------------

// Google Authentication
app.get('/auth/google', function () {
    console.log("First");
    passport.authenticate('google', { scope: ['profile'] });
});

app.get('/auth/redirect', function () {
    console.log("Second");
    passport.authenticate('google');
});

// Store flashcard
app.get('/store/*', function(req,res){
    let url = req.url;
    let Original = req.query.english;
    let Translated = req.query.korean;
    res.send('You requested '+url);
    console.log(Original + " " + Translated);
});


// Translate Request
app.get('/translate*', function(req,res){
    let Original = req.query.english;

    let requestObject = {
        "source": "en",
        "target": "fr",
        "q": [
            Original
        ]
    }
            
    // Make the request
    APIrequest(
        { 
            url: url,
            method: "POST",
            headers: {"content-type": "application/json"},
            json: requestObject	
        },
        
        // Callback
        function(err, APIresHead, APIresBody) {
            if ((err) || (APIresHead.statusCode != 200)) {
                console.log("Got API error");
                console.log(APIresBody);
            }
            
            else {
                if (APIresHead.error) {
                    console.log(APIresHead.error);
                }
                else {
                    var result = {};
                    result["translated"] = APIresBody.data.translations[0].translatedText;
                    res.send(result);
                }
            }
        }
    );
});









