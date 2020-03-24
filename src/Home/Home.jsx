import React from "react";
import '../CSS/Home.css';
import io from 'socket.io-client';
import {browserHistory} from 'react-router';
import OAuth from './OAuth';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// initializes socket used for authentication
const socket = io("http://localhost:8080"); 
// -------------------------------------------------------------------

class Title extends React.Component{
	render(){
		return(
			<div id = "TitlePanel">
				<h1>Welcome to Lango!</h1>
				<h2>Language Learning & Flashcards, for free!</h2>
			</div>
		);
	}
}

class LoginPanel extends React.Component{
	render(){
		return(
			<div id = "LoginPanel">
				<OAuth 
					provider='google'
					socket={socket}
				/>
                <GuestLoginButton />
			</div>
		);
	}
}

class GuestLoginButton extends React.Component{
    constructor(props) {
		super(props);
		this.CreateGuestSession = this.CreateGuestSession.bind(this);
	}
    
    CreateGuestSession(){
        var date = new Date();
        date.setMinutes(date.getMinutes() + 30 );
        cookies.set('Lingo-Session', {UserID: -1, Username: "Guest"}, { path: '/', expires: date});
        window.location.replace('/review');
    }
    
	render(){
		return(
			<div id = "Guest-Login-Button">
				<button type = "button" onClick={this.CreateGuestSession}>
					Login as Guest
				</button>
			</div>
		);
	}
}


class Home extends React.Component{
	componentDidMount() {
		if (cookies.get('Lingo-Session')){
			browserHistory.push('/review');
		}
	}

	render(){
		return(
			<div id = "body">
				<Title />
				<LoginPanel />
			</div>
		);
	}
}

export default Home;
	 