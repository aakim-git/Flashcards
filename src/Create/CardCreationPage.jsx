import React from 'react';
import $ from 'jquery';
import {Link} from "react-router-dom";
import '../CSS/CardCreationPage.css';

import Cookies from 'universal-cookie';
const cookies = new Cookies();
var User = cookies.get('Lingo-Session')
// -------------------------------------------------------------------

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
			<Link to="/review">
				<button type = "button" id = "Start-Review-Button">
					Start Review
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
		
		this.TextArea = React.createRef();
	}

	render(){
		return(
			<div className="textCard" id="FrontCard">
				<textarea onKeyPress={this.checkReturn} ref = {this.TextArea}/>
			</div>
		);
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
		this.storeCard = this.storeCard.bind(this);
	}

	render(){
		return(
			<button type = "button" id = "Save-Button" onClick = {this.storeCard}>
				Save
			</button>
		);
	}

	storeCard(){
		var input = document.getElementById('InputCard');
		var translated = document.getElementById('TranslatedCard');
	}
}

class CardCreationBody extends React.Component{
	constructor(props){
		super(props);
		this.TranslateInput = this.TranslateInput.bind(this);
		this.SaveCard = this.SaveCard.bind(this);
		this.state = {
			FrontText: "",
			BackText: "Type a word, and hit ENTER to translate!"
		};
	}

	render(){
		return(
			<div id = "body">
				<div id = "Card-View-Pane">
					<FrontCard TranslateInput = {this.TranslateInput} />
					<div id = "spacer"></div>
					<BackCard TranslatedText = {this.state.BackText} />
				</div>
				<SaveButton SaveCard = {this.SaveCard}/>
			</div>
		)
	}
	
	SaveCard(){
		var url = "./store?front=" + this.state.FrontText + "?back=" + this.state.BackText + "?id=" + User.id;
		var request = $.ajax({
			type: "POST",
			url: url,
			success: 
				function(data){
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
		this.setState({BackText: "Translating..."});
		var self = this;
		var request = $.ajax({
			type: "GET",
			dataType: "json",
			url: url,
			success: 
				function(data){
					self.setState({BackText: data["translated"]});
				},

			error:
				function(error){
					self.setState({BackText: "Error"});
				}
		});
	}
}


// -------------------------------------------------------------------



	  
class CardCreationMain extends React.Component{
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

export default CardCreationMain;
	 