import firebase from '../config/firebase';
import { IRegister } from '../config/register';

const Register = (data: IRegister) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(() => {
      return null;
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });

export default Register;
