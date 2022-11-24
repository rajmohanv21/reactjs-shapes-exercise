import config from './config';

const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const updateSpaceValue = ({ data }) => ({
	spaceBetweenSquares: data.target.valueAsNumber,
	xAxis: config.initialAxis,
	yAxis: config.initialAxis,
});

const updateCircleRadius = ({ data }) => ({
	circleRadius: data.target.valueAsNumber,
});

const shapeSelectionHandler = ({ data }) => ({
	selectedShape: data.target.value,
});

const actions = {
	increaseCount,
	shapeSelectionHandler,
	updateSpaceValue,
	updateCircleRadius,
};

export default actions;
