import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from "react-router-dom";

import Home from './Home/Home';
import CardCreateMain from './Create/CardCreationPage';
import Review from './Review/CardReviewPage';
import * as serviceWorker from './serviceWorker';

function Main(){
	return(
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/create" component={CardCreateMain} />
					<Route path="/review" component={Review} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
