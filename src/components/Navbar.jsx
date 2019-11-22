import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<Header>
			<h2 className='text'>amel caballero</h2>
			<button className='button-header text'>about</button>
		</Header>
	);
};

export default Navbar;

const Header = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 0.75rem;
	width: 94%;
	position: fixed;
		.button-header {
			border: none;
			background: none;
			text-align: left;
			outline: none;
			cursor: pointer;
		}
		.text {
			font-size: 14px;
			font-weight: 500;
			padding: 18px 0;
		}
`;
