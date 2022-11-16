import { React } from 'react';
import './App.scss';
import Square from './components/Square';

const App = (context) =>
	<div className="App" role="application">
		<Square { ...context }/>
	</div>;

export default App;
