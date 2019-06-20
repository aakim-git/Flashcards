import React from "react";
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
//import Route from "route-router-dom/Route";
// -------------------------------------------------------------------

class Title extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id = "TitlePanel">
				<h1>Welcome to Lango</h1>
				<h2>Customize your vocabulary</h2>
			</div>
		);
	}
}

class LoginPanel extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id = "LoginPanel">
				<div> <Link to="/create">Login</Link> </div>
			</div>
		);
	}

}

class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id = "body">
				<Title />
				<LoginPanel />
			</div>
		);
	}

}

export default Home;
//ReactDOM.render(<Home/>, document.getElementById('root'));
	 