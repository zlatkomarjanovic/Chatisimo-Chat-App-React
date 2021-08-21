import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
	.initializeApp({
		apiKey: 'AIzaSyAp5zqMaKq1pDODxRXqU_SvaQ6_dfifoN4',
		authDomain: 'chatisimo-51283.firebaseapp.com',
		projectId: 'chatisimo-51283',
		storageBucket: 'chatisimo-51283.appspot.com',
		messagingSenderId: '359957631393',
		appId: '1:359957631393:web:916c0e4b38cf758175bbe0',
	})
	.auth();
