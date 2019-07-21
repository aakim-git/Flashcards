import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

import Home from './Home/Home';
import CardCreateMain from './Create/CardCreationPage';
import Review from './Review/CardReviewPage';
import Login from './Home/Login';
import * as serviceWorker from './serviceWorker';

class Main extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<PrivateRoute path="/create" component={CardCreateMain} />
					<PrivateRoute path="/review" component={Review} />
				</Switch>
			</BrowserRouter>
		);
	}
}

function PrivateRoute ({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render=
		{ 
		(props) => ( ! cookies.get('Lingo-Session') )
        ? <Redirect to={{pathname: '/', state: {from: props.location}}} />
        : <Component {...props} />
		}
    />
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
