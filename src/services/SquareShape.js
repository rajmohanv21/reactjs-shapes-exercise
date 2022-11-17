const getSquareShapePosition = ({
	state: { spaceBetweenSquares },
	config: { squareSize },
	data: {	xAxis,	yAxis },
}) => ({
	left: `${ (squareSize + spaceBetweenSquares) * xAxis }px`,
	top: `${ (squareSize + spaceBetweenSquares) * yAxis }px`,
});

const squareService = {
	getSquareShapePosition,
};

export default squareService;
