/** @format */

import React from 'react';
import {Route, Routes} from 'react-router-dom';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<></>} />
				<Route path='/projects' element={<></>} />
			</Routes>
		</div>
	);
};

export default App;
