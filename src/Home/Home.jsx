import React from "react";
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
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

	render(){
		return(
			<div id = "LoginPanel">
				<Link to="/create">Login</Link>
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
	 