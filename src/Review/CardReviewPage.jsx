import React from 'react';
import {browserHistory} from 'react-router';
import {Link} from "react-router-dom";
import $ from 'jquery';
import '../CSS/CardReviewPage.css';

import Cookies from 'universal-cookie';
const cookies = new Cookies();
let User = cookies.get('Lingo-Session');

class Header extends React.Component{
	render(){
		return(
			<div id = "header">
				<ContinueButton ButtonText={this.props.ButtonText}/>
				<h1 id="logo">Lango!</h1>
				<LogoutButton />
			</div>
		)
	}
}

class ContinueButton extends React.Component{
	render(){
		return(
			<Link to="/create" id = "Start-Create-Button">
				<button type = "button">
					{this.props.ButtonText}
				</button>
			</Link>
		);
	}
}

class LogoutButton extends React.Component{
	constructor(props) {
		super(props);
		this.logoff = this.logoff.bind(this);
	}

	logoff(){
		cookies.remove('Lingo-Session', { path: '/'});
		browserHistory.push(`/home`);
	}

	render(){
		return(
			<div id = "Logout-Button">
				<button type = "button" onClick={this.logoff}>
					Logout
				</button>
			</div>
		);
	}
}


// -------------------------------------------------------------------

class Footer extends React.Component{
	render(){
		console.log(User.Username);
		return(
			<div id = "footer"> {User.Username} </div>
		);
	}
}


class Review extends React.Component{
	constructor(props) {
		super(props);
		this.state = {cards: []};
	}

	componentDidMount() {
		var User = cookies.get('Lingo-Session');
		var url = "/api/getcards?id=" + User.UserID;
		$.ajax({
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
				<div id = "ReviewList">
					{
						((rows, i, len) => {
							while(i < len){
								rows.push(
									<div class = "entry">
										<div class = "side1"> {this.state.cards[i].side1} </div>
										<div class = "side2"> {this.state.cards[i].side2} </div>
									</div>
								);
								i++;
							}
							rows.push(<div class = "spacer"></div>)
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
