import React from 'react';
import Flashcard from './Flashcard';
import {Link} from "react-router-dom";
import $ from 'jquery';
import '../CSS/CardPracticePage.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let User = cookies.get('Lingo-Session');

class Header extends React.Component{
	render(){
		return(
			<div id = "header">
				<ContinueButton ButtonText={this.props.ButtonText}/>
				<Link to="/review" id = "logo-container">
					<h1 id="logo">Lango!</h1>
				</Link>
				<div id = "spacer"></div>
			</div>
		)
	}
}

class ContinueButton extends React.Component{
	render(){
		return(
			<Link to="/create" class = "Transition-Button">
				<button type = "button">
					{this.props.ButtonText}
				</button>
			</Link>
		);
	}
}

// -------------------------------------------------------------------

function Footer(props) {
	return(
		<div id = "footer"> {User.Username} </div>
    );
}

// -------------------------------------------------------------------

class NextButton extends React.Component{
	render(){
		return(
			<button type = "button" id = "NextButton" onClick = {this.props.NextCard}>
				Next
			</button>
		);
	}

}

class CardPracticeBody extends React.Component{
	constructor(props){
		super(props);
        
		this.NextCard = this.NextCard.bind(this);
		this.curFront = "";
		this.curBack = "";
		this.cards = null;
	}

	componentDidMount(){
		var User = cookies.get('Lingo-Session');
		var url = "/api/getcards?id=" + User.UserID;
		$.ajax({
			type: "GET",
			url: url,
			success: 
				(data) => {
					this.cards = data;
					this.NextCard();
				}
		});
	}
	
	NextCard(){
		var len = this.cards.length;
		var cur_card = this.cards[Math.floor(Math.random() * len)];
		this.curFront = cur_card.side1;
		this.curBack = cur_card.side2;
		this.forceUpdate();
	}

	render(){
		return(
			<div id = "CardPracticeBody">
				<Flashcard FrontText={this.curFront} BackText={this.curBack} />
				<NextButton NextCard = {this.NextCard} />
			</div>
		);
	}

}


// -------------------------------------------------------------------



	  
class Practice extends React.Component{
	render(){
		return(
			<main>
				<Header ButtonText="Add"/>
				<CardPracticeBody />
				<Footer/>
			</main>
		)
	}
}

export default Practice;
	 