const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const updateSpaceValue = ({ data }) => ({
	spaceBetweenShapes: data.target.valueAsNumber,
});

const selectShapeHandler = ({ data }) => ({
	selectedShape: data.target.value,
});

const actions = {
	increaseCount,
	selectShapeHandler,
	updateSpaceValue,
};

export default actions;
