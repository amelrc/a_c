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
	
	handleCurrentProject = item => {
		console.log('item', item)
		this.setState({ currentProject: item})
	}
	
	render() {
		console.log('updated state', this.state.currentProject)
		const { data } = this.state;
		return (
			<Wrapper>
				
				<div>
					{data.map(item => (
						<Item key={item.id}>
							<Link
								to={{
									state: this.state,
									pathname: `/projects/${item.id}`,
								}}
							>
								<img onClick={() => this.setState({ currentProject: item})} src={`/${item.img[0]}`} alt={item.id} />
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
	padding-top: 80px;
`;

const Item = styled.div`
	margin-bottom: 10px;
	background-color: aqua;
	text-align: center;
`;
