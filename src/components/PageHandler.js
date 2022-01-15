/** @format */
/** @format */
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React, {useRef} from 'react';

const PageHandler = ({Offset, setOffset,last}) => {
	const backBtn = useRef();
	const nextBtn = useRef();
	return (
		<div className='flex justify-between bottom-5'>
			<button ref={backBtn} onClick={() => setOffset(value => value - 1)} disabled={Offset === 0} className={`${Offset === 0 ? 'bg-red-300 absolute cursor-not-allowed' : 'bg-red-500'} sticky text-slate-100 m-2 p-2 left-5 flex place-items-center bottom-5 justify-between`}>
				Back <NavigateBeforeIcon />
			</button>
			<button ref={nextBtn} onClick={() => setOffset(value => value + 1)} disabled={last} className={`${last ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500'} bottom-5 sticky text-slate-100 m-2 p-2 flex right-5 place-items-center justify-between`}>
				Next <NavigateNextIcon />
			</button>
		</div>
	);
};

export default React.memo(PageHandler);
