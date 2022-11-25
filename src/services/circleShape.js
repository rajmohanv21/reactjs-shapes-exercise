import { range } from '@laufire/utils/collection';

const generateCircleShapes = ({
	config: { circlePoints, initialXAxis, initialYAxis },
	state: { spaceBetweenShapes },
}) => {
	let angle = 0;
	const semiCircleCount = 2;

	const slice = semiCircleCount * Math.PI / circlePoints;

	return range(0, circlePoints).map((circlePoint, index) => {
		angle += slice;
		const x = initialXAxis * spaceBetweenShapes * Math.cos(angle);
		const y = initialYAxis * spaceBetweenShapes * Math.sin(angle);

		return { x, y };
	});
};

const getCircleShapePosition = (context) => {
	const circles = generateCircleShapes(context);

	return circles.map(({ x, y }, index) => {
		const circleShape = {
			id: index,
			style: {
				left: `${ x }px`,
				top: `${ y }px`,
			},
		};

		return circleShape;
	});
};

const circleService = {
	getCircleShapePosition,
	generateCircleShapes,
};

export default circleService;
