import React from 'react';
import styled from 'styled-components';

function Button() {
	return (
		<Wrapper>
			<button className='btn'>
				<span className='try-trial'>
					Try it free 7 days
				</span>
				then $20/mo. thereafter
			</button>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-bottom: 2rem;
	.btn {
		width: 80%;
		margin: auto;
		background-color: #6051b4;
		color: white;
		border-radius: 12px;
		box-shadow: 1px 8px hsla(0, 100%, 50%, 0.3);
		font-size: 1rem;
		line-height: 1.5rem;
		padding: 1rem 3rem 1rem 3rem;
		border: none;
		letter-spacing: 0.1rem;
		font-weight: 0;
		margin-left: 10%;
		text-align: center;
	}
	.try-trial {
		font-weight: 700;
	}

	@media screen and (min-width: 768px) {
		.btn {
			width: 67%;
			margin-left: 17%;
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
		}
	}
`;

export default Button;
