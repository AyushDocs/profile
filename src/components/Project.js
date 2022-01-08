/** @format */
import React, {useEffect, useState} from 'react';
import PageHandler from './PageHandler';
const dummyData = [
	{name: 'Spotify Clone', stack: 'built using javascript and my brain'},
	{name: 'Spotify Clone', stack: 'built using javascript and my brain'},
	{
		name: 'Spotify Clone',
		stack: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore quisquam obcaecati accusantium quis. Quidem itaque dolorem nobis exercitationem, nesciunt sit eligendi quas iste. Vero explicabo et maxime deserunt molestiae?',
	},
	{name: 'Spotify Clone', stack: 'built using javascript and my brain'},
	{name: 'Spotify Clone', stack: 'built using javascript and my brain'},
];
const Project = () => {
	const [Data, setData] = useState(dummyData);
	useEffect(() => {
		setData(dummyData);
	}, []);
	return (
		<>
			<div className='flex justify-center my-3'>
				<h1 className='text-2xl font-sans'>These are my Projects</h1>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
				{Data.map(({name, stack}, index) => (
					<ProjectItem liveSiteUrl={'/'} key={index} name={name} stack={stack} />
				))}
			</div>
			<PageHandler last={true} />
		</>
	);
};
const ProjectItem = ({name, stack, liveSiteUrl, githubUrl}) => {
	console.log(`bg-slate-${liveSiteUrl ? '9' : '7'}00`);
	return (
		<div className='border-2 w-96 p-3 mx-auto my-3 relative pb-12 shadow-xl grow-shrink bg-white' style={{gridAutoRows: 'auto auto auto 1fr auto'}}>
			<h2 className='text-center font-bold text-2xl my-2'>{name}</h2>
			<div className='text-center'>{stack}</div>
			<div className='flex justify-center absolute bottom-0 left-0.5 right-0.5'>
				<a
					href={liveSiteUrl}
					target='_blank'
					rel='noreferrer'
					className={`${liveSiteUrl ? 'bg-slate-900' : 'bg-slate-700'} text-white px-2 py-1 rounded-full mx-3 my-2 ${liveSiteUrl ? 'hover:text-slate-900 hover:bg-slate-200' : 'cursor-not-allowed '}`}>
					Live Site
				</a>
				<a href={githubUrl} target='_blank' rel='noreferrer' className='bg-slate-900 text-white px-2 py-1 rounded-full hover:bg-slate-200 hover:text-slate-900 mx-3 my-2 cursor-pointer'>
					Github Repo
				</a>
			</div>
		</div>
	);
};

export default Project;
