import { useEffect, useState } from "react";
import firebaseAuth from "../Firebase/FirebaseInit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
firebaseAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  // auth and provider
  const auth = getAuth();

  // update profile
  const updateProfileName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };

  // create user using email, password
  const userCreate = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      
  };

  //observed

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);

  // login user using email,password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      
  };

  // logOut user
  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    setUser,
    error,
    setError,
    userCreate,
    loginUser,
    logOutUser,
    updateProfileName,
  };
};

export default useFirebase;
