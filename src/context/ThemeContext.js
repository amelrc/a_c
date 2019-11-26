import React, { Component, createContext } from 'react'; //createContext imports the context API
import { getData } from '../data';
import { getGeneralData } from '../data';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
	state = {
		data: getData(),
		general: 'img/ac-outlined.png',
		currentProject: [],
		isLightTheme: true,
		light: { syntax: '#555', ui: '#ddd', bg: 'eee' },
		dark: { syntax: '#ddd', ui: '#333', bg: '555' }
	}; //the state goes here

	// componentDidMount() {
	// 	this.setState({ data: getData() });
	// }

	//all methods relating the state goes here
	toggleTheme = () => {
		this.setState({ isLightTheme: !this.state.isLightTheme });
	};

	outputAbout = () => {
		console.log('hekfh;ekfad');
	};

	render() {
		console.log(this.state.data);
		return (
			// in order to access value={{ ...this.state,..}} across  components ( only class components and not sfc) -> go to Navbar.js
			<ThemeContext.Provider
				value={{
					...this.state,
					toggleTheme: this.toggleTheme,
					handleAbout: this.outputAbout
				}} //every adjustment to state comes here
			>
				{this.props.children}
			</ThemeContext.Provider> // This needs to grap the highest component in the tree - so that all the data is shared accross the application
		);
	}
}

export default ThemeContextProvider;
