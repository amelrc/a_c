import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	// a way of accessing the data from the state is by:
	static contextType = ThemeContext; // this provides the context thus export const ThemeContext = createContext(); not <ThemeContext.Provider> this is the Provider
	render() {
		console.log(this.context);
		const { handleAbout, general } = this.context;
		return (
			<Header>
				<Link className='link' to='/projects'>
					<h1 className='text'>amel caballero</h1>
					{/* <img className='text' src={general} alt={general.id} /> */}
				</Link>
				{/* <Link className='link' to='/about'>
					<h1 onClick={handleAbout} className='text'>
						about
					</h1>
				</Link> */}
			</Header>
		);
	}
}

export default Navbar;

const Header = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 0.75rem;
	width: 94%;
	position: fixed;
	.link {
		cursor: default;
		text-decoration: none;
		color: black;
	}
	.text {
		padding: 24px 0;
		font-size: 18px;
		font-weight: 500;
		font-family: 'Poppins', sans-serif;
		cursor: pointer;
		display: inline-block;
		text-transform: capitalize;
	}
`;
