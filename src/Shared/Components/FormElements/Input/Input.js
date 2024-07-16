import React, { useReducer } from 'react';
import './Input.css';

function InputReducer(state, action) {
	switch (action.type) {
		case 'CHANGE':
			return {
				...state,
				value: action.val,
				isValid: true,
			};

		default:
			return { state };
	}
}

const Input = (props) => {
	const [inputState, dispatch] = useReducer(InputReducer, {
		value: '',
		isValid: false,
	});

	function onChangeHandler(event) {
		dispatch({ type: 'CHANGE', val: event.target.value });
	}

	const element =
		props.element === 'input' ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={onChangeHandler}
				value={inputState.value}
			></input>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				onChange={onChangeHandler}
				value={inputState.value}
			></textarea>
		);

	return (
		<div
			className={`form-control ${
				!inputState.isValid && 'form-control--invalid'
			}`}
		>
			<label
				htmlFor={props.id}
				style={props.style}
			>
				{props.label}
			</label>
			{element}
			{inputState.isValid == false ? <p>{props.errorText}</p> : null}
		</div>
	);
};

export default Input;
