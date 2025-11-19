import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    //google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged((auth), currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

  const authInfo = {
    user,
    setUser,
    googleSignIn,
    logOut,
    loading,
    setLoading
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
