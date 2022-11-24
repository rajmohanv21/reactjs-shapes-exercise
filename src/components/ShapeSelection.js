import React from 'react';
import InputBox from './InputBox';
import ShapeList from './ShapeList';

const ShapeSelection = (context) =>
	<div>
		<ShapeList { ...context }/>
		<br/>
		<InputBox { ...context }/>
	</div>;

export default ShapeSelection;
