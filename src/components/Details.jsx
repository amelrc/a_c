import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Details extends Component {
	imageContent = () => {
		console.log( this.props);
		const pathnameId = this.props.location.pathname.split('/')[2];
		const state = this.props.location.state.data;

		for (let i = 0; i < state.length; i++) {
			const element = state[i].id;
			const toString = element.toString();

			if (toString === pathnameId) {
				let item = this.props.location.state.data[element - 1];
				console.log(item);
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

	random = () => {
		const data = this.props.location.state.data;
		const pathnameId = this.props.location.pathname.split('/')[2];
		
		let randomProjects = [];
	
		// while (randomProjects.length < 4) {
		// 	let random = data[Math.floor(Math.random() * data.length)];

		// 	if (randomProjects.indexOf(random) === -1 ) randomProjects.push(random);
		// }
		console.log('new array', randomProjects);
		// console.log('gafgasdgasg', pathnameId);
	};

	render() {
		return (
			<Wrapper>
				{this.random()}
				{this.imageContent()}
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
