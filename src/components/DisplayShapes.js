import React from 'react';
import Square from './Square';
import Circle from './Circle';

const DisplayShapes = (context) => {
	const { state: { selectedShape }} = context;

	return <div className="display-area">
		{selectedShape === 'Square'
			? <Square { ...context }/>
			: <Circle { ...context }/>}
	</div>;
};

export default DisplayShapes;
