import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD2pP8zeSOFWC-df0YGOQHdOhjcD0pvt_w",
    authDomain: "post-app-84a0c.firebaseapp.com",
    databaseURL: "https://post-app-84a0c.firebaseio.com",
    projectId: "post-app-84a0c",
    storageBucket: "post-app-84a0c.appspot.com",
    messagingSenderId: "369886080779",
    appId: "1:369886080779:web:c2c7933a2a5d36d458fc0e",
    measurementId: "G-H15PFLQ987"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp.firestore()