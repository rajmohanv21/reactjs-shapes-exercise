import React from 'react';

const ShapeList = ({
	actions: { selectShapeHandler },
	state: { selectedShape },
	config: { shapes },
}) =>
	<div>
		<label htmlFor="shapesList">
			Select shape from dropdown list option
		</label>
		<select
			value={ selectedShape }
			onChange={ selectShapeHandler }
		>
			{shapes.map((shape, index) =>
				<option key={ index } value={ shape }>{shape}</option>)}
		</select>
	</div>;

export default ShapeList;
