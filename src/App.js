import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import * as mdc from 'material-components-web';
import "material-components-web/dist/material-components-web.min.css";
import FacebookLogin from 'react-facebook-login';
import login from './login'
import  home from './home';
import score from './score';
import player from './player';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class App extends Component{
	render(){
		return(
			<div>
			<AppBar position="static">
			<Toolbar>
			<IconButton edge="start" color="inherit" aria-label="Menu">
			<MenuIcon />
			</IconButton>
			<Typography variant="h6">
			News
			</Typography>
			<Button color="inherit">Login</Button>
			</Toolbar>
			</AppBar>
			</div>
			)
	}
}
export default App;
