/** @format */

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Project from './Project';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<></>} />
				<Route path='/projects' element={<Project/>} />
			</Routes>
		</div>
	);
};

export default App;
