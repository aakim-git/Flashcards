import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import Cookies from 'universal-cookie';
import Home from './Home/Home';
import Create from './Create/CardCreationPage';
import Review from './Review/CardReviewPage';
import Practice from './Practice/CardPracticePage';
import * as serviceWorker from './serviceWorker';

const cookies = new Cookies();

class Main extends React.Component {
	render() {
		return(
			<BrowserRouter history = {browserHistory}>
				<Switch>
					<Route path="/" exact component={Home} />
					<PrivateRoute path="/create" component={Create} />
					<PrivateRoute path="/review" component={Review} />
					<PrivateRoute path="/practice" component={Practice} />
				</Switch>
			</BrowserRouter>
		);
	}
}

function PrivateRoute ({component: Component, ...rest}) {
	return (
		<Route
			{...rest}
			render = { 
				(props) => ( ! cookies.get('Lingo-Session') )
				? <Redirect to={{pathname: '/', state: {from: props.location}}} />
				: <Component {...props} />
			}
		/>
	);
}

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
