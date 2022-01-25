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
  const [isLoading,setIsLoading]= useState(true);
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
    setIsLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, []);

  // login user using email,password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      
  };

  // logOut user
  const logOutUser = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      }).finally(()=> setIsLoading(false));
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
    isLoading,
    setIsLoading
  };
};

export default useFirebase;
