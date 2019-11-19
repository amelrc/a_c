import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/main';
import Details from './components/Details';
import PNF from './components/PNF';
import styled from 'styled-components';

function App() {
	return (
		<Application>
			<h1>NavBar</h1>
			<Switch>
				<Route path='/projects/:id' render={props => <Details {...props} />} />
				<Route path='/projects' component={Main} />
				<Route component={PNF} />
			</Switch>
		</Application>
	);
}

export default App;

const Application = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: aquamarine;
`;
