import config from './config';

const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const saveSpaceValue = ({ data }) => ({
	spaceBetweenSquares: data.target.valueAsNumber,
	xAxis: config.initialAxis,
	yAxis: config.initialAxis,
});

const actions = {
	increaseCount,
	saveSpaceValue,
};

export default actions;
