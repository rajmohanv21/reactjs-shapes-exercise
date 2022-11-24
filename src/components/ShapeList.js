import React from 'react';

const ShapeList = ({
	actions: { shapeSelectionHandler },
	state: { selectedShape },
}) =>
	<div>
		<label htmlFor="shapesList">
			Select shape from dropdown list option
		</label>
		<select
			value={ selectedShape }
			onChange={ shapeSelectionHandler }
		>
			<option value="Square">Square</option>
			<option value="Circle">Circle</option>
		</select>
	</div>;

export default ShapeList;
