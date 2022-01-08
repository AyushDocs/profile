/** @format */

import React, {useState} from 'react';

const Project = () => {
	const [Data, setData] = useState();
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
		</div>
	);
};
const ProjectItem = () => {
	return (
		<div className='border-2 w-96 p-3 mx-auto my-3'>
			<h2 className='text-center font-bold text-2xl my-2'>Spotify Clone</h2>
			<div className='text-justify'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dicta recusandae sed nam voluptate velit obcaecati perferendis dignissimos ipsa consequuntur dolore, repellendus at culpa aspernatur! Maiores illo odio praesentium corporis?
			</div>
			<div className='flex justify-center'>
				<button className='bg-slate-900 text-white px-2 py-1 rounded-full hover:bg-slate-200 hover:text-slate-900 mx-3 my-2'>Live Site</button>
				<button className='bg-slate-900 text-white px-2 py-1 rounded-full hover:bg-slate-200 hover:text-slate-900 mx-3 my-2'>Github Repo</button>
			</div>
		</div>
	);
};

export default Project;
