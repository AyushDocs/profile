/** @format */

import {initializeApp} from 'firebase/app';
import {enableIndexedDbPersistence, getFirestore} from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyC3AGn2qsxPiI_MkCAzCU3CUHqm8KpCwL4',
	authDomain: 'portfolio-4808b.firebaseapp.com',
	projectId: 'portfolio-4808b',
	storageBucket: 'portfolio-4808b.appspot.com',
	messagingSenderId: '338596407255',
	appId: '1:338596407255:web:2da6c510e4f20f2731cd92',
};

const firebase = initializeApp(firebaseConfig);
export const db=getFirestore(firebase)
export default firebase;
