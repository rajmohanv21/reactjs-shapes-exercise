import { React } from 'react';
import './App.scss';
import DisplayShapes from './components/DisplayShapes';
import ShapeSelection from './components/ShapeSelection';

const App = (context) => <div className="App" role="application">
	<ShapeSelection { ...context }/>
	<DisplayShapes { ...context }/>
</div>;

export default App;
