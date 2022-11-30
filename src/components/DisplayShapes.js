import React from 'react';
import Square from './Square';
import Circle from './Circle';
import generateShapes from '../services/shapeGenerator';

const shapeComponents = {
	Square,
	Circle,
};

const generateShapesService = {
	Square: generateShapes.generateSquares,
	Circle: generateShapes.generateCircles,
};

const DisplayShapes = (context) => {
	const { state: { selectedShape }} = context;
	const generatedShapes = generateShapesService[selectedShape](context);
	const SelectedComponent = shapeComponents[selectedShape];

	return <div className="display-area">
		<SelectedComponent { ...{ ...context, data: { generatedShapes }} }/>
	</div>;
};

export default DisplayShapes;
