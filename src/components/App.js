/** @format */

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Project from './Project';
const App = () => {
	return (
		<div className='h-screen overflow-scroll'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Project />} />
			</Routes>
		</div>
	);
};
export default App;