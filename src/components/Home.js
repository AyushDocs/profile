/** @format */

import React from 'react';
import me from '../assets/me.jpg';
import useTitle from '../hooks/useTitle';
const Home = () => {
	useTitle('Home');
	return (
		<div>
			<div className=' py-20'>
				<div className='flex justify-center'>
					<img src={me} alt='' className='rounded-full' />
				</div>
				<div className='flex justify-center font-bold '>
					<div>Hi I am Ayush Dubey and I make dreams come to reality</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
