import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Details extends Component {
	imageContent = () => {
		console.log('the props', this.props);

		const pathnameId = this.props.location.pathname.split('/')[2];
		const state = this.props.location.state;
		
		for (let i = 0; i < state.length; i++) {
			const element = state[i].id;
			const toString = element.toString();

			if (toString === pathnameId) {
				let item = this.props.location.state[element - 1];
				return (
					<React.Fragment>
						<h1>{item.title}</h1>
						<div className='image-wrapper'>
							<img
								className='detailed-img'
								src={`/${item.img[0]}`}
								alt={item.id}
							/>
							<img
								className='detailed-img'
								src={`/${item.img[0]}`}
								alt={item.id}
							/>
							<img
								className='detailed-img'
								src={`/${item.img[0]}`}
								alt={item.id}
							/>
							<img
								className='detailed-img'
								src={`/${item.img[0]}`}
								alt={item.id}
							/>
						</div>
					</React.Fragment>
				);
			}
		}
	};

	render() {
		return (
			<Wrapper>
				{this.imageContent()}
				<div>
					
				</div>
			</Wrapper>
		);
	}
}

export default Details;

const Wrapper = styled.div`
	width: 94%;
	background-color: blueviolet;
	display: flex;
	flex-direction: column;
	.image-wrapper {
		width: 50%;
		background-color: cornflowerblue;
		align-self: flex-end;
	}
	.detailed-img {
		width: 100%;
	}
`;
