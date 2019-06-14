import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import player from './player';
import login from './login';
import score from './score';
import home from './home';
import futureSeries from './futureSeries';

// import  firebase from './firebase';


ReactDOM.render(
	<Router>
	<div>
	<Route exact path='/' component={login} />
	<Route path='/home' component={home} />
	<Route path='/score' component={score} />
	<Route path='/player' component={player} />
	<Route path='/futureSeries' component={futureSeries} />
	</div>
	</Router>,
	 document.getElementById('root')
	 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
