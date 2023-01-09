import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import errorImg from '../images/icon-error.svg';

function Form() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isError, setIsError] = useState(false);
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName && lastName && email && password) {
			const person = {
				id: new Date().getTime().toString(),
				firstName,
				lastName,
				email,
				password,
			};
			setPeople((people) => {
				return [...people, person];
			});
			setPassword('');
			setFirstName('');
			setLastName('');
			setEmail('');
			console.log(people);
		} else {
			setIsError(true);
		}
	};

	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value);
	};
	const handleLastNameChange = (e) => {
		setLastName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<Wrapper>
			<Button />
			<form onSubmit={handleSubmit}>
				<input
					className={isError ? 'input-error' : 'input'}
					type='text'
					value={firstName}
					id='firstName'
					name='firstName'
					onChange={handleFirstNameChange}
					placeholder='First Name'
					onClick={() => setIsError(false)}
				/>
				{isError && (
					<>
						<p className='error'>
							First Name cannot be empty
						</p>
						<img
							className='error-img'
							src={errorImg}
							alt='error'></img>
					</>
				)}
				<input
					className={isError ? 'input-error' : 'input'}
					onClick={() => setIsError(false)}
					type='text'
					value={lastName}
					id='lastName'
					name='lastName'
					onChange={handleLastNameChange}
					placeholder='Last Name'
				/>
				{isError && (
					<>
						<p className='error'>
							Last Name cannot be empty
						</p>
						<img
							className='error-img'
							src={errorImg}
							alt='error'></img>
					</>
				)}
				<input
					className={isError ? 'input-error' : 'input'}
					onClick={() => setIsError(false)}
					type='email'
					value={email}
					id='email'
					name='email'
					onChange={handleEmailChange}
					placeholder='Email Address'
				/>
				{isError && (
					<>
						<p className='error'>Email cannot be empty</p>
						<img
							className='error-img'
							src={errorImg}
							alt='error'></img>
					</>
				)}
				<input
					className={isError ? 'input-error' : 'input'}
					onClick={() => setIsError(false)}
					type='password'
					value={password}
					id='password'
					name='password'
					onChange={handlePasswordChange}
					placeholder='Password'
				/>{' '}
				{isError && (
					<>
						<p className='error'>
							Password cannot be empty
						</p>
						<img
							className='error-img'
							src={errorImg}
							alt='error'></img>
					</>
				)}
				<button className='claim-btn' type='submit'>
					Claim your free trial
				</button>
				<p>
					By clicking the button you are agreeing to our{' '}
					<span className='terms'>Terms and Services</span>
				</p>
			</form>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 60vh;

	.error-img {
		position: relative;
		top: -4rem;
		right: -8rem;
	}

	.error {
		font-style: italic;
		color: red;
		font-size: 0.6rem;
		margin-top: -1rem;
		margin-left: 2rem;
		text-align: right;
	}

	form {
		background-color: white;
		box-shadow: 1px 8px hsla(0, 100%, 50%, 0.3);
		padding: 1.5rem;
		margin: auto;
		width: 70%;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.input {
		width: 95%;
		height: 2.5rem;
		border-radius: 6px;
		margin-bottom: 1rem;
		border: 1px solid gray;
		padding-left: 0.5rem;
	}

	input:focus {
		input::placeholder {
			visibility: hidden;
		}
	}

	.input-error {
		width: 95%;
		height: 2.5rem;
		border-radius: 6px;
		margin-bottom: 1rem;
		padding-left: 1rem;
		border: 1px solid red;
		margin-top: -1.5rem;
	}

	.input-error::placeholder {
		visibility: hidden;
	}

	.input-error:nth-child(1) {
		margin-top: 0.5rem;
	}

	input::placeholder {
		font-weight: 600;
		font-size: 0.9rem;
	}

	.claim-btn {
		background-color: #28b161;
		text-transform: uppercase;
		width: 100%;
		padding: 1.5rem;
		color: white;
		border-radius: 6px;
		border: none;
		box-shadow: 2px 2px lightgreen;
	}
	p {
		font-size: 0.7rem;
		width: 80%;
		text-align: center;
		color: gray;
		text-shadow: 1px 1px lightgray;
		line-height: 1.3rem;
	}
	.terms {
		color: salmon;
		font-weight: 800;
		text-shadow: none;
	}

	@media screen and (min-width: 768px) {
		grid-column: 2;
		grid-row: 2 / 4;
		margin-left: -3rem;
		form {
			height: 80%;
			width: 60%;
			padding: 2rem;
		}
		.input {
			height: 2rem;
			padding: 1.2rem;
		}

		.input-error {
			height: 4rem;
			padding: 0.8rem;
		}
		.claim-btn {
			height: 4rem;
		}
		p {
			font-size: 1rem;
		}

		.error-img {
			right: -16rem;
		}
	}
`;

export default Form;
