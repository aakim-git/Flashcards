import React from "react";
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
import GoogleLogin from 'react-google-login';
import '../CSS/Home.css';
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

	//<Link to="/create">Login</Link>
	render(){
		return(
			<div id = "LoginPanel">
				<GoogleLogin
					clientId="293229937557-g2ig70pnt75k1d1ir3gc1f24smdnk38j.apps.googleusercontent.com"
					buttonText="Log in with Google"
					onSuccess={this.GoogleSuccess}
				/>
				<Link to="/create">Or not</Link>
			</div>
		);
	}

}

class Home extends React.Component{
	constructor(props){
		super(props);
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
	 