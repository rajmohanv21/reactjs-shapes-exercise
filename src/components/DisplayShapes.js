import React from 'react';
import Square from './Square';
import Circle from './Circle';

const DisplayShapes = (context) => {
	const { state: { selectedShape }} = context;

	const shapeComponents = {
		Square: <Square { ...context }/>,
		Circle: <Circle { ...context }/>,
	};

	return <div className="display-area">
		{ shapeComponents[selectedShape] }
	</div>;
};

export default DisplayShapes;
