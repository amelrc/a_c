import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../data';
import styled from 'styled-components';

class Main extends Component {
	state = {
		data: [],
		detail: [
			{ id: 1, title: 'One' },
			{ id: 2, title: 'Two' }
		]
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
									item: this.item,
									hello: 'hello',
									state: this.state.data
								}}
							>
								<img src={item.img[0]} alt={item.id} />
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
