import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id = "header">
				<ContinueButton ButtonText={this.props.ButtonText}/>
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
				<button type = "button" id = "Start-Review-Button">
					{this.props.ButtonText}
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


class Review extends React.Component{
	render(){
		return(
			<div>
				<Header ButtonText="Add"/>
				<h1>REVIEW</h1>
				<Footer/>
			</div>
		);
	}
}

export default Review;
