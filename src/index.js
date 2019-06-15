import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter,Link,Route } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import player from './player.js';
import login from './login.js';
import score from './score.js';
import home from './home.js';
import PropTypes from 'prop-types';
// import futureSeries from './futureSeries';

// import  firebase from './firebase';
// class index extends Component{	
// 	constructor(props){
// 		super(props);
// 	}
// }
// componentWillReceiveProps=(props)=>{
// 	console.log(props)
// }
// function route(){
// 	console.log("function call");
// 	console.log("this.props:",this.props);
// }

// function fun(com){
// 	var route = com;
// 	console.log(route)
// 	localStorage.getItem('email') ? ( <Route component={route} />)
// 				: (<Route component={login} />)
					
// }

ReactDOM.render(
	// <Router>
	// <div>
	// <Route exact path='/' component={login} />
	// <Route path='/home' component={home} />
	// <Route path='/score' component={score} />
	// <Route path='/player' component={player} />
	// <Route path='/futureSeries' component={futureSeries} />
	// </div>
	// </Router>,
		<div>
		<HashRouter>
			<Route exact path='/' component={login} />
			<Route  path="/home" render={() =>(
				localStorage.getItem('email') ? ( <Route component={home} />)
				: (<Route component={login} />)
				)} />
			<Route  path="/player" render={() =>(
				localStorage.getItem('email') ? ( <Route  component={player} />)
				: (<Route component={login} />)
				)} />
			<Route  path="/score" render={() =>(
				localStorage.getItem('email') ? ( <Route  component={score} />)
				: (<Route component={login} />)
				)} />
		</HashRouter>
		</div>,
	 document.getElementById('root')
	 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
