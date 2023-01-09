import React from 'react';
import styled from 'styled-components';

function Text() {
	return (
		<Wrapper>
			<h1>Learn to code by watching others</h1>
			<p>
				See how experienced developers solve problems in
				real-time. watching scripts tutorials is great, but
				understanding how developers think is invaluable.
			</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	color: white;
	text-align: center;
	margin-top: 3rem;
	margin-bottom: 3rem;

	h1 {
		font-size: 1.6rem;
		width: 60%;
		margin: auto;
		margin-bottom: 1.2rem;
	}
	p {
		font-size: 1.1rem;
		width: 80%;
		margin: auto;
		margin-bottom: 2rem;
		font-weight: 400;
	}

	@media screen and (min-width: 768px) {
		text-align: left;
		grid-column: 1;
		grid-row: 2 / 3;
		margin-top: 13%;
		margin-left: 7rem;

		h1 {
			font-size: 4rem;
			width: 70%;
		}

		p {
			font-size: 1.8rem;
			width: 80%;
			padding-left: 5rem;
		}
	}
`;

export default Text;
