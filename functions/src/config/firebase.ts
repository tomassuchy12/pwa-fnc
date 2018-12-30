import * as firebase from 'firebase';

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyDqlxiv0W1uLtvM3XrrKU75rZ3HfL7Jwb8',
  authDomain: 'pwa-bp.firebaseapp.com',
  databaseURL: 'https://pwa-bp.firebaseio.com',
  projectId: 'pwa-bp',
  storageBucket: 'pwa-bp.appspot.com',
  messagingSenderId: '198778315233',
};
firebase.initializeApp(config);

export default firebase;
