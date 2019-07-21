import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id = "header">
				<ContinueButton ButtonText={this.props.ButtonText}/>
				<h1 id="logo">Lango!</h1>
				<div id = "spacer"></div>
			</div>
		)
	}
}

class ContinueButton extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<Link to="/create">
				<button type = "button" id = "Start-Review-Button">
					{this.props.ButtonText}
				</button>
			</Link>
		);
	}
}

// -------------------------------------------------------------------

class Footer extends React.Component{
	constructor(props) {
		super(props);
		this.logoff = this.logoff.bind(this);
	}

	logoff(){
		cookies.remove('Lingo-Session', { path: '/'});
		console.log("logged off!");
	}

	render(){
		return(
			<button id = "footer" onClick={this.logoff}> UserName </button>
		);
	}
}


class Review extends React.Component{
	render(){
		return(
			<div>
				<Header ButtonText="Add"/>
				<h1>REVIEW</h1>
				<Footer/>
			</div>
		);
	}
}

export default Review;
