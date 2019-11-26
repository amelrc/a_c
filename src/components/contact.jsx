import React from 'react';
import styled from 'styled-components';

const Contact = () => {
	return (
		<div>
			<p>
				<Link href={'mailto:amelrc@gmail.com'} className='underlined'>
					contact for collaborations
				</Link>
			</p>
		</div>
	);
};

export default Contact;

const Link = styled.p`
	.underlined {
		font-size: 1.1em;
		text-decoration: none;
		background-image: linear-gradient(
			to right,
			$dark-purple 0,
			$dark-purple 100%
		);
		background-position: 0 1.1em;
		background-size: 0 100%;
		background-repeat: no-repeat;
		transition: 0.3s;
		text-transform: uppercase;
		word-spacing: 5px;
		&:hover {
			background-size: 100% 100%;
		}
	}
`;
