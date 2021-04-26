import firebase from 'firebase/app';
import 'firebase/auth';

const app =
    !firebase.apps.length &&
    firebase.initializeApp({
        apiKey: 'AIzaSyBcrQkUIIFNeePtOfUf5eV5j4902ktLIrw',
        authDomain: 'login-test-hr.firebaseapp.com',
        projectId: 'login-test-hr',
        storageBucket: 'login-test-hr.appspot.com',
        messagingSenderId: '747816166008',
        appId: '1:747816166008:web:2bc13eaad3298431ce438d',
    });

export const auth = app.auth();
export default app;
