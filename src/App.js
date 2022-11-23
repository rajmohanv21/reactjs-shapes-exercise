import { React } from 'react';
import './App.scss';
import InputBox from './components/InputBox';
// import Square from './components/Square';
import Circle from './components/Circle';

const App = (context) =>
	<div className="App" role="application">
		<InputBox { ...context }/>
		{/* <Square { ...context }/> */}
		<Circle { ...context }/>
	</div>;

export default App;
