/** @format */
import {collection, endBefore, getDocs, limit, orderBy, query, startAfter} from 'firebase/firestore';
import React, {useEffect, useRef, useState} from 'react';
import loadingImg from '../assets/loading.gif';
import {db} from '../firebase';
import useTitle from '../hooks/useTitle';
const Project = () => {
	useTitle('Projects');
	const [Data, setData] = useState([]);
	const [Order, setOrder] = useState('name');
	const [loading, setLoading] = useState(false);
	const lastElemRef = useRef();
	useEffect(() => {
		const getInitData = async () => {
			setLoading(true);
			const _query = query(collection(db, 'projects'), limit(5), orderBy('name'));
			const response = await getDocs(_query);
			const _data = response.docs.map(project => project.data());
			setLoading(false);
			lastElemRef.current = _data[_data.length - 1];
			setData(_data);
		};
		getInitData();
	}, []);
	const handlePrevClick = async () => {
		setLoading(true);
		const firstElem = Data[0];
		const _query = query(collection(db, 'projects'), orderBy(Order), limit(5), endBefore(firstElem.name));
		const response = await getDocs(_query);
		const _data = response.docs.map(project => project.data());
		setLoading(false);
		setData(_data);
	};
	const handleNextClick = async () => {
		setLoading(true);
		const lastElem = Data[Data.length - 1];
		const _query = query(collection(db, 'projects'), orderBy(Order), limit(5), startAfter(lastElem.name));
		const response = await getDocs(_query);
		const _data = response.docs.map(project => project.data());
		setLoading(false);
		setData(_data);
	};
	return (
		<div className='mx-10'>
			<div className='flex justify-center my-3'>
				<Tag name='React' />
				<Tag name='Spring boot' />
				<Tag name='Node Js' />
				<Tag name='Dev Ops' />
				<Tag name='Firebase' />
			</div>

			<div className='flex justify-center'>{loading && <img src={loadingImg} alt='' />}</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
				{Data?.map?.((project, index) => (
					<ProjectItem key={index} {...project} />
				))}
			</div>
			<div className='flex justify-between'>
				<div onClick={handlePrevClick} className='bg-blue-600 text-white px-3 py-2 cursor-pointer'>
					Back
				</div>
				<div onClick={handleNextClick} className='bg-blue-600 text-white px-3 py-2 cursor-pointer'>
					Next
				</div>
			</div>
		</div>
	);
};
const Tag = ({name}) => (
	<div className='flex sm:my-5 place-items-center rounded-xl cursor-pointer bg-red-500 mx-2 hover:bg-red-700 text-slate-200 py-2 px-4'>
		<button className=''>x</button>
		<div className=''>{name}</div>
	</div>
);
const ProjectItem = ({name, stack, liveSiteUrl, githubUrl}) => {
	return (
		<div className='border-2 flex flex-col justify-between w-96 p-3 mx-auto my-3  pb-12 hover:shadow-xl grow-shrink bg-white'>
			<div className=''>
				<h2 className='text-center font-bold text-2xl my-2'>{name}</h2>
				<div className='text-center'>{stack}</div>
			</div>
		</div>
	);
};
const NewPageLink = ({url, name}) => (
	<a href={url} target='_blank' rel='noreferrer' className={`${url ? 'bg-slate-900' : 'bg-slate-700'} text-white px-2 py-1 rounded-full mx-3 my-2 ${url ? 'hover:text-slate-900 hover:bg-slate-200' : 'cursor-not-allowed '}`}>
		{name}
	</a>
);

export default Project;
