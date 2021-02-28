import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAH_Xt8f_Ozpw7QEBTurdC7mcca-xKRQVQ",
    authDomain: "discord-clone-293f4.firebaseapp.com",
    projectId: "discord-clone-293f4",
    storageBucket: "discord-clone-293f4.appspot.com",
    messagingSenderId: "534812713997",
    appId: "1:534812713997:web:5dc850599d9425d6446144"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;