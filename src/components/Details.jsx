import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Details extends Component {
	imageContent = () => {
		console.log('1', this.props);
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
		// let random = data[Math.floor(Math.random() * data.length)];

		let randomProjects = [];
		let r = Math.floor(Math.random() * data.length);
		console.log('this is the r',r)
		while (randomProjects.length < 4) {
			
			if (randomProjects.indexOf(r) === -1) randomProjects.push(r);
		}
		console.log('gafgasdgasg', randomProjects);
		console.log('gafgasdgasg', pathnameId);
	};

	render() {
		return (
			<Wrapper>
				{this.random()}
				{this.imageContent()}

				{/* <h1>{item.title}</h1> */}
				{/* <div>{
					data.map(item => (
						<Link
								to={{
									pathname: `/projects/${item.id}`,
									state: this.state
								}}
							>
								<img src={item.img[0]} alt={item.id} />
								<h1>{item.title}</h1>
							</Link>
					))}
					</div> */}
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
