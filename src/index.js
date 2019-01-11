import Taskbar from './taskbar.js';
import React from 'react';
import ReactDOM from 'react-dom';

var components = [
	<li>Tesla</li>
]
ReactDOM.render(
	<Taskbar taskbarElements={components}/>,
	document.getElementById('root')
);
