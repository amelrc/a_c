import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './components/Main';
// import Details from './components/Details';
// import PNF from './components/PNF';
import styled from 'styled-components';
import ThemeContextProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/contact';

function App() {
	return (
		<ThemeContextProvider>
			<Application>
				{/* <Switch> */}
					<Navbar />
					<Route path='/about' component={About} />
					{/* <Main /> */}
					<Route path='/projects' component={Main} />
					{/* <Route
						path='/projects/:id'
						render={props => <Details {...props} />}
					/>
					<Redirect to='/not-found' component={PNF} />
					<Redirect from='/' exact to='/projects' /> */}
				{/* </Switch> */}
				{/* <Footer /> */}
				{/* <Contact/> */}
			</Application>
		</ThemeContextProvider>
	);
}

export default App;

const Application = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
