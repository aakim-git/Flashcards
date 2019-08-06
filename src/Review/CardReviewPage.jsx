import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import $ from 'jquery';
import '../CSS/CardReviewPage.css';

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
				<button type = "button" id = "Start-Create-Button">
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
	constructor(props) {
		super(props);
		this.state = {cards: []};
	}

	componentDidMount() {
		console.log("loading cards...");
		var User = cookies.get('Lingo-Session');
		var url = "/api/getcards?id=" + User.UserID;
		var request = $.ajax({
			type: "GET",
			url: url,
			success: 
				(data) => {
					this.setState({cards: data});
					console.log("got cards");
				}
		});
	}

	render(){
		return(
			<div>
				<Header ButtonText="Add"/>
				<div>
					{
						((rows, i, len) => {
							while(i < len){
								rows.push(<div>{this.state.cards[i].side1} {this.state.cards[i].side2}</div>);
								i++;
							}
							return rows;
						})([], 0, this.state.cards.length)
					}
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Review;
