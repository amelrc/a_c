import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Main extends Component {
	static contextType = ThemeContext;
	render() {
		const { data } = this.context;
		return (
			<Wrapper>
				{data.map(item => (
					<Item key={item.id}>
						{/* <Link */}
							
								{/* to={{
									state: this.state,
									pathname: `/projects/${item.id}` */}
								{/* }} */}
								{/* > */}
						<img className='image' src={item.img[0]} alt={item.id} />
						{/* </Link> */}
					</Item>
				))}
			</Wrapper>
		);
	}
}

export default Main;

const Wrapper = styled.main`
	width: 94%;
	padding-top: 70px;
`;

const Item = styled.figure`
	margin-bottom: 10px;
	height: 100%;
	width: 100%;
	// border: 2px red solid;
	.image {
		width: 100%;
	}
`;
