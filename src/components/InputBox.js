import React from 'react';

const InputBox = ({ actions: { saveSpaceValue }}) =>
	<div>
		<label htmlFor="SpaceValueBetweenSquares">
			Enter Space Value(px) in Between Squares
		</label>
		<input
			type="number"
			name="SpaceValueBetweenSquares"
			onChange={ saveSpaceValue }
		/></div>;

export default InputBox;
