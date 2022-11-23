import React from 'react';
import circleService from '../services/circleShape';

const Circle = (context) => {
	const circles = circleService.getCircleShapePosition(context);

	return circles.map(({ style, id }) =>
		<div key={ id } className="circle" style={ style }/>);
};

export default Circle;
