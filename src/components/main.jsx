import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../data';
import styled from 'styled-components';

class Main extends Component {
	state = {
		data: [],
		currentProject: [],
	};

	componentDidMount() {
		this.setState({ data: getData() });
	}

	render() {
		return (
			<Wrapper>
				<div>
					
					{this.state.data.map(item => (
						<Item key={item.id}>
							<Link
								to={{
									pathname: `/projects/${item.id}`,
									state: this.state
								}}
							>
								<img src={`/${item.img[0]}`} alt={item.id} />
							</Link>
						</Item>
					))}
				</div>
			</Wrapper>
		);
	}
}

export default Main;

const Wrapper = styled.div`
	width: 94%;
	background-color: blueviolet;
`;

const Item = styled.div`
	margin-bottom: 10px;
	background-color: aqua;
	text-align: center;
`;
