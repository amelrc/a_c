import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class ThemeToggle extends Component {
	static contextType = ThemeContext;
	render() {
		
		return <button>Toggle Theme</button>;
	}
}

export default ThemeToggle;
