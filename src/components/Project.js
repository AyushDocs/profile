/** @format */

import React, {useEffect, useState} from 'react';
const dummyData = [
	{name: 'Spotify Clone', stack: 'built using javascript and my brain'},
	{name: 'Spotify Clone', stack: 'built using javascript and my brain'},
	{name: 'Spotify Clone', stack: 'built using javascript and my brain'},
	{name: 'Spotify Clone', stack: 'built using javascript and my brain'},
	{name: 'Spotify Clone', stack: 'built using javascript and my brain'},
	{name: 'Spotify Clone', stack: 'built using javascript and my brain'},
];
const Project = () => {
	const [Data, setData] = useState(dummyData);
	useEffect(() => {
		setData(dummyData);
	}, []);
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
			{Data.map(({name,stack}, index) => (
				<ProjectItem key={index} name={name} stack={stack} />
			))}
		</div>
	);
};
const ProjectItem = ({name, stack}) => {
	return (
		<div className='border-2 w-96 p-3 mx-auto my-3'>
			<h2 className='text-center font-bold text-2xl my-2'>{name}</h2>
			<div className='text-center'>{stack}</div>
			<div className='flex justify-center'>
				<button className='bg-slate-900 text-white px-2 py-1 rounded-full hover:bg-slate-200 hover:text-slate-900 mx-3 my-2'>Live Site</button>
				<button className='bg-slate-900 text-white px-2 py-1 rounded-full hover:bg-slate-200 hover:text-slate-900 mx-3 my-2'>Github Repo</button>
			</div>
		</div>
	);
};

export default Project;
