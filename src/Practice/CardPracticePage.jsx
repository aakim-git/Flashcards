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
		this.TranslateInput = this.TranslateInput.bind(this);
		this.UpdateFrontText = this.UpdateFrontText.bind(this);
		this.UpdateBackText = this.UpdateBackText.bind(this);
		this.SaveCard = this.SaveCard.bind(this);

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

	SaveCard(){
		var url = "./store?front=" + this.FrontText + "&back=" + this.BackText + "&id=" + User.UserID;
		
		var request = $.ajax({
			type: "POST",
			url: url,
			success: 
				function(data){
				//NEEDS TO RECIEVE ERROR CODE
					alert("Card saved!");
				},

			error:
				function(error){
					alert("Error");
				}
		});
		
	}

	TranslateInput(data) {
		var url = "./translate?english=" + data;
		this.UpdateBackText("Translating...");
		var self = this;
		var request = $.ajax({
			type: "GET",
			dataType: "json",
			url: url,
			success: 
				function(data){
					self.UpdateBackText(data["translated"]);
				},

			error:
				function(error){
					self.UpdateBackText("Error");
				}
		});
	}

	UpdateFrontText(text){
		this.FrontText = text;
	}

	UpdateBackText(data){
		this.BackText = data;
		this.forceUpdate();
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
	 