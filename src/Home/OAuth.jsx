import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

import GoogleIcon from '../Assets/google.png';

export default class OAuth extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			user: {},
			popup_open: false
		}

		this.startAuth = this.startAuth.bind(this);
		this.launchPopup = this.launchPopup.bind(this);
		this.checkPopup = this.checkPopup.bind(this);
		this.closeCard = this.closeCard.bind(this);
	}

	// in componentDidMount, we:
	//    set up socket
	componentDidMount() {
		const socket = this.props.socket;
		const provider = this.props.provider;

		// receives info when user finishes logging in. 
		socket.on(provider, user => {  
			this.popup.close();
			var date = new Date();
			date.setMinutes(date.getSeconds() + 30 );
			cookies.set('Lingo-Session', {UserID: user.id}, { path: '/', expires: date});
			window.location.replace('/review');
		});
	}

	// if popup is not currently opened,
	// launchPopup. Then, begin checkPopup.  
	startAuth(){
		if (this.state.popup_open == false) {
			this.popup = this.launchPopup();
			this.checkPopup();
			this.setState({popup_open: true});
		}
	}

	// Launches popup using the viewport to reference dimensions
	// the popup serves a url to ./provider/socketId. 
	// the server can use the information in the popup knowing the socket.id. 
	// returns the instance of the popup
	launchPopup() {
		const width = 600;
		const height = 600;
		const left = (window.innerWidth / 2) - (width / 2);
		const top = (window.innerHeight / 2) - (height / 2);

		const url = `http://localhost:8080/login/${this.props.provider}?socketId=${this.props.socket.id}`
		return window.open(url, '',       
			`toolbar=no, location=no, directories=no, status=no, menubar=no, 
			scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
			height=${height}, top=${top}, left=${left}`
		);
	}


	// sets Timer that fires every 1 second. 
	// if popup is closed and user did not login, setstate to popup = closed and restart timer. 
	// used to check if login button should be active. 
	checkPopup() {
		const Timer = setInterval(function(){
			const popup = this.popup;
			if (!popup || popup.closed || popup.closed === undefined) {
				clearInterval(Timer)
				this.setState({ popup_open: false})
			}
		}.bind(this), 1000);
	}



	// self explanatory
	closeCard(){
		this.setState({user: {}});
	}

	render() {
		const name = this.state.user;
		const provider = this.props.provider;
		const disabled = this.state.popup_open;
    
		return (
			<button onClick={this.startAuth}>
				<img src={GoogleIcon} id="GoogleIcon"/>
				Log in with Google
			</button>
		);
	}
}
