<<<<<<< HEAD
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
=======
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCg1fCEO8i7MQnM3SiMJPiVcADp_NI9XTw",
//   authDomain: "movie-app-1-6ec44.firebaseapp.com",
//   projectId: "movie-app-1-6ec44",
//   storageBucket: "movie-app-1-6ec44.appspot.com",
//   messagingSenderId: "950886341278",
//   appId: "1:950886341278:web:f4feb188157227da55398f",
// };
>>>>>>> b56cc861ebf91c757180bef6b050ee945ba48adb

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
<<<<<<< HEAD
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
  
=======

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Email/password
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

export const logOut = () => {
  signOut(auth);
  alert("logged out successfully");
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
      // ...
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      // ...
    });
};
>>>>>>> b56cc861ebf91c757180bef6b050ee945ba48adb
