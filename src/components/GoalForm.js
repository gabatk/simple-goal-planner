import React, { useState } from 'react';
import GoalBtn from './GoalBtn';
import './GoalForm.css';

const GoalForm = props => {
	const [inputValue, setInputValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const changeInputValue = event => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setInputValue(event.target.value);
	};

	const submitBtnHandler = event => {
		event.preventDefault();
		if (inputValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(inputValue);
	};

	return (
		<form>
			<div className='form-control'>
				<label
					className='form-control__label'
					style={{ color: !isValid ? 'red' : 'black' }}>
					Course Goal
				</label>
				<input
					className='form-control__input'
					type={'text'}
					placeholder='Type your goal'
					onChange={changeInputValue}
					style={{
						borderColor: !isValid ? 'red' : 'black',
						backgroundColor: !isValid ? 'salmon' : 'transparent',
					}}></input>
			</div>
			<GoalBtn submitBtn={submitBtnHandler} />
		</form>
	);
};

export default GoalForm;
