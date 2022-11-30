import React, { useEffect } from 'react';
import { createContext} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProveder = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

 const createUser = (email, password) =>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
 }

 useEffect( () =>{
  const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    console.log(currentUser);
    setLoading(false);
    setUser(currentUser);
  });

  return () =>{
    return unsubscribe();
  }
 }, [])

    const authInfo = {
        user,
        loading,
        createUser
    }
    return (
      <AuthContext.Provider value={authInfo}>
            {children}
      </AuthContext.Provider>
    );
};

export default AuthProveder;