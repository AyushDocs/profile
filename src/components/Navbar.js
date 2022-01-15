/** @format */

import {addDoc, collection} from 'firebase/firestore';
import React, {useRef, useState} from 'react';
import {NavLink as Link} from 'react-router-dom';
import {db} from '../firebase';
const Navbar = () => {
	const [ShowModal, setShowModal] = useState(false);
	const [ShowItemsOnSm, setShowItemsOnSm] = useState(false);
	return (
		<div className='bg-black text-2xl px-3 py-4 lg:flex lg:justify-between'>
			<div className='flex justify-between '>
				<Link to='/' className='text-white'>
					Ayush
				</Link>
				<div onClick={() => setShowItemsOnSm(m => !m)} className='hover:bg-slate-700 lg:hidden cursor-pointer'>
					<div className='h-px w-9 bg-white mt-2'></div>
					<div className='h-px w-9 bg-white mt-2'></div>
					<div className='h-px w-9 bg-white mt-2'></div>
				</div>
			</div>
			<div className={`mx-auto lg:flex transition-all delay-75 lg:justify-around h-0 -translate-x-40 ${ShowItemsOnSm && 'transform-none h-auto '}`}>
				<Link className='block text-white mr-2' to='/'>
					Home
				</Link>
				<button onClick={() => setShowModal(m => !m)} className='block text-white mr-2'>
					Contact me
				</button>
				<Link className='block text-white mr-2' to='/projects'>
					Projects
				</Link>
			</div>
				<Modal setShowModal={setShowModal} open={ShowModal} />
		</div>
	);
};
const Modal = ({open, setShowModal}) => (
	<div className={` top-0 left-0 w-screen bg-slate-400 h-screen bg-opacity-40 fixed pt-28 ${open ? 'block' : 'hidden'}`}>
		<div className={`w-96 relative m-auto bg-white`}>
			<div className='flex justify-end m-2'>
				<button onClick={() => setShowModal(false)}>X</button>
			</div>
			<div className='px-10'>
				<ContactMe />
			</div>
		</div>
	</div>
);
const ContactMe = () => {
	const ref = useRef();
	const [Form, setForm] = useState({email: '', query: ''});
	const handleChange = e => setForm({...Form, [e.target.name]: e.target.value});
	const handleSubmit = async e => {
		e.preventDefault();
		await addDoc(collection(db, 'queries'), Form);
		console.log('success');
	};
	return (
		<div className=''>
			<div ref={ref} className=''>
				<form onSubmit={handleSubmit}>
					<label htmlFor='contact-form-email' className='block'>Enter your email</label>
					<input placeholder='email@adress.com' onChange={handleChange} value={Form.email} name='email' className=' border-slate-600 w-fit text-xl border-2 p-2 block my-2 outline-none' id='contact-form-email' />
					<label htmlFor='contact-form-query' className='block my-2'>Enter your query</label>
					<textarea placeholder='Can you build ___ for me' onChange={handleChange} value={Form.query} name='query' className='my-2 border-slate-600 text-xl border-2 p-2 outline-none w-full overflow-auto ' id='contact-form-query'></textarea>
					<div className='flex justify-center'>
						<button className='block bg-purple-300 rounded-xl p-2' type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Navbar;
