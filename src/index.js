import Taskbar from './taskbar.js';
import React from 'react';
import ReactDOM from 'react-dom';

var components = [
	<li>Tesla</li>,
	<li>Model S</li>,
	<li>Model X</li>,
	<li>Model 3</li>,
	<li>Roadster</li>,
	<li>Energy</li>,
	<li>Shop</li>,
	<li>Sign In</li>,
	<li>Sidebar</li>
]
ReactDOM.render(
	<Taskbar taskbarElements={components}/>,
	document.getElementById('root')
);
