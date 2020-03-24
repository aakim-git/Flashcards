import React from 'react';
import $ from 'jquery';
import {Link} from "react-router-dom";
import '../CSS/CardCreationPage.css';
import Snackbar from '@material-ui/core/Snackbar';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let User = cookies.get('Lingo-Session');

// -------------------------------------------------------------------

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
		);
	}
}

class ContinueButton extends React.Component{
    constructor(props){
		super(props);
		this.ActivatePopup = this.ActivatePopup.bind(this);
        this.ClosePopup = this.ClosePopup.bind(this);
        this.state = { popupOpen: false };
	}
    
    ActivatePopup() { this.setState({popupOpen: true}); };
    ClosePopup() { this.setState({popupOpen: false}); };
        
    render(){
        let ConditionalLink;

        if (User.UserID === -1) {
            ConditionalLink = 
                <div class = "Transition-Button" onClick = {this.ActivatePopup}>
                    <button type = "button">
                        Practice
                    </button>
                    
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        autoHideDuration={3000}
                        open={this.state.popupOpen}
                        onClose={this.ClosePopup}
                        message="You must be logged in to practice!"
                    />
                </div>
        } 
        
        else {
            ConditionalLink = 
                <Link to="/practice" class = "Transition-Button">
                    <button type = "button">
                        Practice
                    </button>
                </Link>
        }
        
		return ConditionalLink;
	}
}

// -------------------------------------------------------------------

function Footer(props) {
	return(
		<div id = "footer">{User.Username}</div>
    );
}

// -------------------------------------------------------------------

class FrontCard extends React.Component{
	constructor(props) {
		super(props);
		this.CheckReturn = this.CheckReturn.bind(this);
		this.TextAreaResize = this.TextAreaResize.bind(this);
		this.UpdateFrontText = this.UpdateFrontText.bind(this);
        this.FocusOnTextArea = this.FocusOnTextArea.bind(this);
		this.TextArea = React.createRef();
	}
    
    TextAreaResize(){
		this.TextArea.current.style.height = 'auto';
		this.TextArea.current.style.height = this.TextArea.current.scrollHeight + 'px';
	}

	UpdateFrontText(){
		this.props.UpdateFrontText(this.TextArea.current.value);
	}

	CheckReturn(event) {
		if(event.charCode === 13){
			this.props.TranslateInput(this.TextArea.current.value);
            event.preventDefault();
		}
	}
    
    FocusOnTextArea() {
        this.TextArea.current.focus()
    }

	render(){
		return(
			<div className="textCard" id="FrontCard" onClick = {this.FocusOnTextArea}>
				<textarea 
					onKeyPress={this.CheckReturn} 
					onKeyUp={this.UpdateFrontText} 
					onChange={this.TextAreaResize}
					ref = {this.TextArea}
				/>
			</div>
		);
	}
}

class BackCard extends React.Component{
	render(){
		return(
			<div className="textCard" id = "BackCard">
				<p>{this.props.TranslatedText}</p>
			</div>
		);
	}
}

class SaveButton extends React.Component{    
    constructor(props){
		super(props);
		this.ActivatePopup = this.ActivatePopup.bind(this);
        this.ClosePopup = this.ClosePopup.bind(this);
        this.state = { popupOpen: false };
	}
    
    ActivatePopup() { if(User.UserID === -1){ this.setState({popupOpen: true}); }};
    ClosePopup() { this.setState({popupOpen: false}); };
    
	render(){
		return(
            <div id = "Save-Button-Container">
                <button type = "button" id = "Save-Button" onClick = {(e) => {this.ActivatePopup(); this.props.SaveCard();}}>
                    Save
                </button>
                
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    autoHideDuration={3000}
                    open={this.state.popupOpen}
                    onClose={this.ClosePopup}
                    message="You must be logged in to save flashcards!"
                />
            </div>
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
        this.ActivatePopup = this.ActivatePopup.bind(this);
        this.ClosePopup = this.ClosePopup.bind(this);
        this.state = { popupOpen: false };

		this.FrontText = "";
		this.BackText = "Type a word, and hit ENTER to translate!";
	}
    
    ActivatePopup() { if(User.UserID !== -1) { this.setState({popupOpen: true}); } };
    ClosePopup() { this.setState({popupOpen: false}); };

	SaveCard(){
        if(User.UserID !== -1){
            var url = "./store?front=" + this.FrontText + "&back=" + this.BackText + "&id=" + User.UserID;
            $.ajax({
                type: "POST",
                url: url,
                success: 
                    (data) => {
                        this.ActivatePopup();
                    },  

                error:
                    (error) => {
                        this.UpdateBackText("Error");
                    }
            });
        }
		
	}

	TranslateInput(data) {
		var url = "./translate?english=" + data;
		this.UpdateBackText("Translating...");
		$.ajax({
			type: "GET",
			dataType: "json",
			url: url,
			success: 
				(data) => {
					this.UpdateBackText(data["translated"]);
				},

			error:
				(error) => {
                    this.UpdateBackText("Error");
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
    
	render(){
		return(
			<div id = "body">
				<div id = "Card-View-Pane">
					<FrontCard UpdateFrontText = {this.UpdateFrontText} TranslateInput = {this.TranslateInput} />
					<div id = "spacer"></div>
					<BackCard TranslatedText = {this.BackText} />
				</div>
				<SaveButton SaveCard = {this.SaveCard}/>
                
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    autoHideDuration={3000}
                    open={this.state.popupOpen}
                    onClose={this.ClosePopup}
                    message="Card Saved!"
                />
			</div>
		)
	}
}


// -------------------------------------------------------------------



	  
class Create extends React.Component{
	render(){
		return(
			<main>
				<Header ButtonText="Practice"/>
				<CardCreationBody />
				<Footer/>
			</main>
		)
	}


}

export default Create;
	 