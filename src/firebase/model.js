import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import store from '../store/store';
import * as Actions from "../store/actions";



const firebaseApp = firebase.initializeApp(firebaseConfig);


const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

class FirebaseModel {
    UserLogin = () => {
        
        return true;
    }

    UserRegister = async (email, password) => {
        const newUser = await firebaseAppAuth.createUserWithEmailAndPassword(email, password).catch(err => {
            return err.message;
        });
        store.dispatch({type: Actions.USER_LOGGEDIN, currentUser: firebaseAppAuth.currentUser});
        return newUser;
    }
}

export default FirebaseModel;