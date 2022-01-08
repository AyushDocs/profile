/** @format */
/** @format */
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React, {useEffect, useRef, useState} from 'react';

const PageHandler= ({last}) => {
	const [Offset, setOffset] = useState(0)
	const backBtn = useRef();
	const nextBtn = useRef();
	useEffect(() => {
		console.log(backBtn.current);
		console.log(nextBtn.current);
	}, [])
	return (
		<div className='flex justify-between'>
			<button ref={backBtn} onClick={() => setOffset(value => value - 1)} disabled={Offset===0} className={`${Offset===0?'bg-red-300 cursor-not-allowed':'bg-red-500'} text-slate-100 m-2 p-2 flex place-items-center justify-between`}>
				<NavigateBeforeIcon /> Back
			</button>
			<button ref={nextBtn} onClick={() => setOffset(value => value + 1)} disabled={last} className={`${last?'bg-red-300 cursor-not-allowed':'bg-red-500'} text-slate-100 m-2 p-2 flex place-items-center justify-between`}>
				Next <NavigateNextIcon />
			</button>
		</div>
	);
};

export default React.memo(PageHandler);
