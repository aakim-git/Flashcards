import React from "react";
import '../CSS/Home.css';
import io from 'socket.io-client';
import OAuth from './OAuth';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// initializes socket for authentication
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
			</div>
		);
	}

}

class Home extends React.Component{
	componentDidMount() {
		if (cookies.get('Lingo-Session')){
			this.props.history.push('review');
		}
	}

	render(){
		// if user is logged in, should redirect to card_review_page
		return(
			<div id = "body">
				<Title />
				<LoginPanel />
			</div>
		);
	}
}

export default Home;
	 