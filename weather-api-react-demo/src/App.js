import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';




function TestCounter() {
	

		const [count, setCount] = useState(0);

	return (
		<div>
			<img src={logo} className="App-logo" alt="logo" />
			<h2>
				This is a counter: {count}
			</h2>
			<button onClick={() => setCount(count + 1)}>Click to increment</button>
		</div>
	);
}

export default TestCounter;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
