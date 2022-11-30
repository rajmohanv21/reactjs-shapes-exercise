const updateSpaceValue = ({ data }) => ({
	spaceBetweenShapes: data.target.valueAsNumber,
});

const selectShapeHandler = ({ data }) => ({
	selectedShape: data.target.value,
});

const actions = {
	selectShapeHandler,
	updateSpaceValue,
};

export default actions;
