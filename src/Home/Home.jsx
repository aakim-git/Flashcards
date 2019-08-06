import React from "react";
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
import GoogleLogin from 'react-google-login';
import '../CSS/Home.css';
import io from 'socket.io-client';
import OAuth from './OAuth';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// initializes socket for authentication
const socket = io("http://localhost:8080"); 
// -------------------------------------------------------------------

class Title extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id = "TitlePanel">
				<h1>Welcome to Lingo!</h1>
				<h2>Vocab is our middle name</h2>
			</div>
		);
	}
}

class LoginPanel extends React.Component{
	constructor(props){
		super(props);
	}

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
	constructor(props){
		super(props);
	}

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
	 