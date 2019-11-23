import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './components/Main';
import Details from './components/Details';
import PNF from './components/PNF';
import styled from 'styled-components';
import ThemeContextProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	return (
		<ThemeContextProvider>
			<Application >
				<Navbar />
				<Main/>
				{/* <Switch>
					<Route
						path='/projects/:id'
						render={props => <Details {...props} />}
					/>
					<Route path='/projects' component={Main} />
					<Redirect to='/not-found' component={PNF} />
					<Redirect from='/' exact to='/projects' />
				</Switch>
				 */}
				<Footer />
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
