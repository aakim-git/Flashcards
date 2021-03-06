import React from 'react';

class CardFront extends React.Component {
	render(props) {
		return(
			<div className='card-side side-front'>
				<div className='card-side-container'>
					<p id='trans'>{this.props.text}</p>
				</div>
			</div>
		);
	}
}

class CardBack extends React.Component {
	render(props) {
		return(
			<div className='card-side side-back'>
				<div className='card-side-container'>
					<p id='congrats'>{this.props.text}</p>
				</div>
			</div>
		);
	}
} 

class Flashcard extends React.Component {
	render(props) {
		return(
			<div className='card-container'>
				<div className='card-body'>
					<CardBack text={this.props.BackText} />
					<CardFront text={this.props.FrontText} />
				</div>
			</div>
		);
	}
}

export default Flashcard;
	 