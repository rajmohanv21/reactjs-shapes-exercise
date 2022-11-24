import React from 'react';

const getInputBoxName = (selectedShape) =>
	(selectedShape === 'Square'
		? 'SpaceValueBetweenSquares'
		: 'RadiusValueBetweenSquares');

const getLabelText = (selectedShape) =>
	(selectedShape === 'Square'
		? 'Enter Space Value(px) in Between Squares'
		: 'Enter Radius Value');

const InputBox = ({ state: { selectedShape },
	actions:	{
		updateSpaceValue,
		updateCircleRadius,
	}}) => {
	const name = getInputBoxName(selectedShape);

	return <div>
		<label htmlFor={ name }> { getLabelText(selectedShape) } </label>
		<input
			type="number"
			name={ name }
			onChange={ selectedShape === 'Square'
				? updateSpaceValue
				: updateCircleRadius }
		/>
	</div>;
};

export default InputBox;
