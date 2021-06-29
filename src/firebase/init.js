import firebase from 'firebase'

var firebaseConfig = {
  /* your config */
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp.firestore()
