import React from 'react';
import $ from 'jquery';
import {Link} from "react-router-dom";
import '../CSS/CardCreationPage.css';

import Cookies from 'universal-cookie';
const cookies = new Cookies();
let User = cookies.get('Lingo-Session');
// -------------------------------------------------------------------

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id = "header">
				<ContinueButton />
				<Link to="/review">
					<h1 id="logo">Lango!</h1>
				</Link>
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

class FrontCard extends React.Component{
	constructor(props) {
		super(props);
		this.checkReturn = this.checkReturn.bind(this);
		this.UpdateFrontText = this.UpdateFrontText.bind(this);

		this.TextArea = React.createRef();
	}

	render(){
		return(
			<div className="textCard" id="FrontCard">
				<textarea onKeyPress={this.checkReturn} onKeyUp={this.UpdateFrontText} ref = {this.TextArea}/>
			</div>
		);
	}

	UpdateFrontText(){
		this.props.UpdateFrontText(this.TextArea.current.value);
	}

	checkReturn(event) {
		if(event.charCode == 13){
			this.props.TranslateInput(this.TextArea.current.value);
		}
	}
}

class BackCard extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className="textCard" id = "BackCard">
				<p>{this.props.TranslatedText}</p>
			</div>
		);
	}
}

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



	  
class Create extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<main>
				<Header />
				<CardCreationBody />
				<Footer/>
			</main>
		)
	}


}

export default Create;
	 