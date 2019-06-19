import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
// import { HashRouter,Link,Route } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import player from './player.js';
import login from './login.js';
import score from './score.js';
import home from './home.js';
import { ProtectedRoute } from "./protected.route";
import PropTypes from 'prop-types';
import { Certificate } from 'crypto';
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

// function change(param){
// 	console.log("path:"+param);
// 	return(
// 	<HashRouter>
// 	{localStorage.getItem('email') ? ( <Route  component={param} />)
// 	: (<Route component={login} />)}
// 	</HashRouter>
// 	)
// }

function App() {
	return (
	  <div className="App">
		<Switch>
				<Route exact path="/" component={login}/>
				<ProtectedRoute exact path="/home" component={home} />
				<ProtectedRoute exact path="/player" component={player} />
				<ProtectedRoute exact path="/score/:mid" component={score} />
				<ProtectedRoute exact path="/player/:pid" component={player} />
				<Route path="*" component={() => 
				<html>
					<h1><center>404 PAGE NOT FOUND</center></h1>
				</html>} />
		</Switch>
	  </div>
	);
  }

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
		// <div>
		// <HashRouter>
		// 	<Route exact path='/' component={login} />
		// 	<Route  path="/home" render={() =>change("home")} />
		// 	<Route  path="/player" render={() =>(
		// 		localStorage.getItem('email') ? ( <Route  component={player} />)
		// 		: (<Route component={login} />)
		// 		)} />
		// 	<Route  path="/score" render={() =>(
		// 		localStorage.getItem('email') ? ( <Route  component={score} />)
		// 		: (<Route component={login} />)
		// 		)} />
		// </HashRouter>
		// </div>,
		// <div>
		// <BrowserRouter>
		// 	<Switch>
		// 		<Route exact path="/" component={login}/>
		// 		<ProtectedRoute exact path="/home" component={home} />
		// 		<ProtectedRoute exact path="/player" component={player} />
		// 		<ProtectedRoute exact path="/score/:mid" component={score} />
		// 		<ProtectedRoute exact path="/player/:pid" component={player} />
		// 		<Route path="*" component={() => "404 NOT FOUND"} />
		// 	</Switch>
		// </BrowserRouter>
		// </div>,
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	 document.getElementById('root')
	 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
