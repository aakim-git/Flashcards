import React from 'react';

const cardContainer = document.querySelector('.react-card');

class CardInput extends React.Component {
	render() {
		return(
			<fieldset>
				<input name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
			</fieldset>
		);
	}
}

class CardTextarea extends React.Component {
	render() {
		return(
			<fieldset>
				<textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required ></textarea>
			</fieldset>
		);
	}
}

class CardFront extends React.Component {
	render(props) {
		return(
			<div className='card-side side-front'>
				<div className='card-side-container'>
					<h2 id='trans'>{this.props.text}</h2>
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
					<h2 id='congrats'>{this.props.text}</h2>
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
	 