import React from 'react';
import './NewPlace.css';
import Input from '../../Shared/Components/FormElements/Input/Input';

const NewPlace = () => {
	return (
		<form className="place-form">
			<Input
				element="input"
				type="text"
				label="Title"
				validators={[]}
				errorText="PAS BON"
			></Input>
		</form>
	);
};

export default NewPlace;
