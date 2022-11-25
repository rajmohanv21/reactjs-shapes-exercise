import React from 'react';

const inputBoxName = {
	Square: 'SpaceValueBetweenSquares',
	Circle: 'RadiusValueBetweenSquares',
};

const inputLabelText = {
	Square: 'Enter Space Value(px) in Between Squares',
	Circle: 'Enter Radius Value',
};

const InputBox = ({
	state: { selectedShape },
	actions: { updateSpaceValue },
}) => {
	const name = inputBoxName[selectedShape];

	return <div>
		<label htmlFor={ name }> {inputLabelText[selectedShape]} </label>
		<input
			type="number"
			name={ name }
			onChange={ updateSpaceValue }
		/>
	</div>;
};

export default InputBox;
