import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    updateProfile,
    onAuthStateChanged
  } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object


// Initialize Firebase




//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
/* const firebaseConfig = {
    apiKey: "AIzaSyAm_DXezUnqQGTKXx6tDHA2vmL9508IQaI",
    authDomain: "movie-app-39192.firebaseapp.com",
    projectId: "movie-app-39192",
    storageBucket: "movie-app-39192.appspot.com",
    messagingSenderId: "964780885121",
    appId: "1:964780885121:web:d71361ac1c8769f953f980"
  }; */

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};
export const signIn = async (email, password, navigate) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      console.log(userCredential);
    } catch (err) {
      alert(err.message);
    }
  };

  export const logOut = () =>{
    signOut(auth)
    alert("logged out succesfully");
  }



export const userObserver = (setCurrentUser)=>{
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
     
      setCurrentUser(currentUser)
      // ...
    } else {
      // User is signed out
      // ...
      setCurrentUser(false)
    }
  });
  
}




export const signIn2 = (navigate)=>{

  const provider = new GoogleAuthProvider();
  let user2 =  signInWithPopup(auth, provider)
  navigate("/")
  console.log(user2);

};
  