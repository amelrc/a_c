import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Wrapper, Header } from '../commons/Wrapper';
import styled from 'styled-components';

class About extends Component {
	static contextType = ThemeContext;
	render() {
		return (
			<Wrapper>
				<Header>
					<AboutText>
						I am a designer and developer who enjoys every aspect of the job. I
						take pride in creating stunning material both on and off-line. Since
						beginning my journey as a designer, I've worked as freelancer, for
						agencies, consulted for start-ups, and collaborated with other
						talented people. 
						<p>
						I spend most of my time designing and building
						digital products, I am also helpful in other areas of business. You
						can also call me a product designer, experience designer, or by any
						other market defined function-title. I am a multi-disciplinary maker
						in wide range of design disciplines with a background in art.
						</p>
					</AboutText>
				</Header>
			</Wrapper>
		);
	}
}

export default About;

const AboutText = styled.p`
	grid-column-start: 2;
	font-size: 18px;
	font-weight: 500;
	padding: 24px 24px 24px 0;
	font-family: Helvetica, sans-serif;
	background-color: lightcyan;;
`;
