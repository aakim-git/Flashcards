import React from 'react';
import Flashcard from './Flashcard';
import {Link} from "react-router-dom";
import '../CSS/CardPracticePage.css';

import Cookies from 'universal-cookie';
const cookies = new Cookies();
let User = cookies.get('Lingo-Session');

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id = "header">
				<ContinueButton />
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
					Create More Cards
				</button>
			</Link>
		);
	}
}

// -------------------------------------------------------------------

function Footer(props) {
	return(
		<div id = "footer"> ${User.username} </div>
    );
}

// -------------------------------------------------------------------

class NextButton extends React.Component{
	constructor(props) {
		super(props);

		this.NextCard = this.NextCard.bind(this);
	}

	render(){
		return(
			<button type = "button" id = "NextButton" onClick = {this.NextCard}>
				Next
			</button>
		);
	}

	NextCard(){
		console.log("ohohohoo");
	}

}

class CardPracticeBody extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id = "body">
				<Flashcard />
				<NextButton />
			</div>
		)
	}
}


// -------------------------------------------------------------------



	  
class Practice extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<main>
				<Header />
				<CardPracticeBody />
				<Footer/>
			</main>
		)
	}


}

export default Practice;
	 