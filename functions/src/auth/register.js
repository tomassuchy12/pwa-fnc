import firebase from '../config/firebase';

const Register = (email, password) => (
firebase.auth().createUserWithEmailAndPassword(email, password).then(() => { return null; }).catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

}));

export default Register;
