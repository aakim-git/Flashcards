import React from 'react';
import $ from 'jquery';
import {Link} from "react-router-dom";
import '../CSS/CardCreationPage.css';
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
		<div id = "footer"> UserName </div>
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
		this.state = {
			inputText: "Type a word, and hit ENTER to translate!"
		};
	}

	render(){
		return(
			<div id = "body">
				<div id = "Card-View-Pane">
					<FrontCard TranslateInput = {this.TranslateInput} />
					<div id = "spacer"></div>
					<BackCard TranslatedText = {this.state.inputText} />
				</div>
				<SaveButton />
			</div>
		)
	}
	
	TranslateInput(data) {
		var url = "./translate?english=" + data;
		this.setState({inputText: "Translating..."});
		var self = this;
		var request = $.ajax({
			type: "GET",
			dataType: "json",
			url: url,
			success: 
				function(data){
					self.setState({inputText: data["translated"]});
				},

			error:
				function(error){
					self.setState({inputText: "Error"});
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
	 