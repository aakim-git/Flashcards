// Libraries:
const express = require('express');
const path = require('path');
const APIrequest = require('request');
const fs = require('fs');
const https = require('https');
const http = require('http');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const socketio = require('socket.io');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("Flashcards.db");  

// Set up server connection
const port = 8080; 

const app = express();
var server = http.createServer(app);
var router = express.Router();


// Set up Translate API Usage
app.use(express.json());
const APIkey = "AIzaSyASA6UAaiHkeRRrA_-Vx0Q6dFMs0CLsOJk"; 
const translateURL = "https://translation.googleapis.com/language/translate/v2?key="+APIkey

// Set up Login and User Authentication
app.use(passport.initialize()); // sets up req.user to enable serialize, etc. 
passport.use(new GoogleStrategy(
    {
        clientID: '293229937557-g2ig70pnt75k1d1ir3gc1f24smdnk38j.apps.googleusercontent.com',
        clientSecret: 'LpQtBbqh83jGUxTC_zScOYU_',
        callbackURL: 'http://localhost:8080/login/google/callback'
    },
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function(err, user){
        done(err, user);
    });
});

app.use(cors({
    origin: ['https://127.0.0.1:3000', 'https://localhost:3000']
}));

app.use(session({
    secret: 'random',
    resave: true,
    saveUninitialized: true
}));

// sockets
const io = socketio(server);
app.set('io', io);

// finalize
server.listen(port, function () {
    console.log('Listening...');
});


//---------------------------------------------------------------

// on successful login, create and store user object
router.get("/login/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    function (req, res) {
        const io = req.app.get('io');
        const user = {
            id: req.user.id,
            username: req.user.displayName
        };  
        io.in(req.session.socketId).emit('google', user);

        db.get(`SELECT * from Users where UserID = ${req.user.id}`, function (err, rows) {
            if(rows == undefined){
                db.run(`INSERT INTO Users ('UserID', 'UserName')
                    VALUES (${req.user.id}, '${req.user.username}')`,
                    function (err) {
                        if (err) {
                            console.log("Error", err);
                        }

                        else {
                            console.log("Created new user");
                        }
                    }
                );
            }
        });

        res.end();
    }
);

router.use(function (req, res, next) {
    req.session.socketId = req.query.socketId
    next();
});

router.get('/login/google',
    passport.authenticate('google', {scope:['email', 'profile']})
);

app.use('/', router);





// check if user is authenticated or not
app.get('/API/isauthorized', function (req, res) {
    if (req.user) {
        res.send(true);
    }

    else {
        res.send(false);
    }
});

// Store flashcard
app.post('/store*', function (req, res) {
    db.run(`INSERT INTO FlashCards (UserID, side1, side2)
            VALUES (${req.query.id}, '${req.query.front}', '${req.query.back}')`,
        function (err) {
            if (err) {
                console.log("Error", err);
            }

            else {
                console.log("Stored Flashcard successfully");
                res.sendStatus(200);
            }
        }
    );
});

// Store flashcard
app.delete('/DeleteCard*', function (req, res) {
    db.run(`DELETE FROM FlashCards 
            WHERE UserID = ${req.query.id} AND side1 = '${req.query.front}'
            AND side2 = '${req.query.back}'`,
        function (err) {
            if (err) {
                throw err;
            }

            else {
                db.all(`SELECT * FROM FlashCards WHERE UserID = ${req.query.id}`, [], (err, rows) => {
                    if (err) {
                        throw err;
                    }

                    res.send(rows);
                });
            }
        }
    )
});

// Return cards for a user
app.get('/api/getcards*', function (req, res) {
    var UserID = req.query.id;

    db.all(`SELECT * FROM FlashCards WHERE UserID = ${UserID}`, [], (err, rows) => {
        if (err) {
            throw err;
        }

        res.send(rows);
    });
});

// Ask Google Translate API to process word. 
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
            url: translateURL,
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
