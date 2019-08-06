import React from 'react';
import Flashcard from './Flashcard';
import '../CSS/CardPracticePage.css';

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
			<Link to="/practice">
				<button type = "button" id = "Start-Practice-Button">
					Start Practicing!
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

class SaveButton extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<button type = "button" id = "Save-Button" onClick = {this.props.SaveCard}>
				Save
			</button>
		);
	}

}

class CardCreationBody extends React.Component{
	constructor(props){
		super(props);

		this.FrontText = "";
		this.BackText = "Type a word, and hit ENTER to translate!";
	}

	render(){
		return(
			<div id = "body">
				<div id = "Card-View-Pane">
					<FrontCard UpdateFrontText = {this.UpdateFrontText} TranslateInput = {this.TranslateInput} />
					<div id = "spacer"></div>
					<BackCard TranslatedText = {this.BackText} />
				</div>
				<SaveButton SaveCard = {this.SaveCard}/>
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
				<Flashcard />
				<Footer/>
			</main>
		)
	}


}

export default Practice;
	 