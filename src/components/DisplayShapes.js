import React from 'react';
import Square from './Square';
import Circle from './Circle';

const shapeComponents = {
	Square,
	Circle,
};

const DisplayShapes = (context) => {
	const { state: { selectedShape }} = context;
	const SelectedComponent = shapeComponents[selectedShape];

	return <div className="display-area">
		<SelectedComponent { ...context }/>
	</div>;
};

export default DisplayShapes;
