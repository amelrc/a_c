import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './components/main';
import Details from './components/Details';
import PNF from './components/PNF';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	return (
		<Application>
			<Navbar/>
			<Switch>
				<Route path='/projects/:id' render={props => <Details {...props}/>} />
				<Route path='/projects' component={Main} />
				<Redirect to='/not-found' component={PNF} />
				<Redirect from='/' exact to='/projects' />
			</Switch>
			<Footer/>
		</Application>
	);
}

export default App;

const Application = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
