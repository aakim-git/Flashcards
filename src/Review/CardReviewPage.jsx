import React from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery';
import '../CSS/CardReviewPage.css';
import DeleteIcon from '../Assets/delete.png';

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
			<Link to="/create" class = "Transition-Button">
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
        window.location.replace('/');
	}

	render(){
		return(
            <div class = "Transition-Button">
				<button type = "button" onClick={this.logoff}>
					{(User.UserID === -1) ? 'Login' : 'Logout'}
				</button>
			</div>
		);
	}
}


// -------------------------------------------------------------------

class Footer extends React.Component{
	render(){
		return(
			<div id = "footer"> {User.Username} </div>
		);
	}
}


class Review extends React.Component{
	constructor(props) {
		super(props);
        this.DeleteCard = this.DeleteCard.bind(this);
		this.state = {
            cards: []
        };
	}

	componentDidMount() {
        // Load flashcards from database
		var User = cookies.get('Lingo-Session');
		var url = "/api/getcards?id=" + User.UserID;
		$.ajax({
			type: "GET",
			url: url,
			success: 
				(data) => {
					this.setState({cards: data});
				}
		});
	}

    DeleteCard(card){
        var User = cookies.get('Lingo-Session');        
        var url = "./DeleteCard?front=" + card.side1 + "&back=" + card.side2 + "&id=" + User.UserID;
        $.ajax({
            type: "DELETE",
            url: url,
            success: 
                (data) => {
                    this.setState({cards: data});
                },
            
            error: 
                (error) => {
                    console.log(error);
                }
        });
    }

	render(){
        let ReviewBody;
        if(this.state.cards.length === 0){
            ReviewBody = "You have no flashcards yet!"
        }
        else {
            ReviewBody = 
                this.state.cards.map(card => (
                    <div class = "entry">
                        <div class = "side1"> {card.side1} </div>
                        <div class = "side2"> {card.side2} </div>
                        <button onClick = {this.DeleteCard.bind(this, card)}> 
                            <img src={DeleteIcon} id="DeleteIcon" alt="Delete Flashcard"/>
                        </button>
                    </div>
                ))
                
            // If there are odd num of flashcards, even out the array. 
            if(ReviewBody.length % 2 === 1){
                ReviewBody.push(
                    <div class = "spacer">
                    </div>
                );
            }
        }
        
		return(
			<div>
				<Header ButtonText="Create"/>
                <div id = "ReviewList">
                    {ReviewBody}
                </div>
				<Footer/>
			</div>
		);
	}
}

export default Review;
