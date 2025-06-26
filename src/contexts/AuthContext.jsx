import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase"; // adjust path as needed
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // clean up listener on unmount
  }, []);

  // Sign in with Google
  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

  // Sign in with email & password
  const loginWithEmail = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Signup with email & password
  const signupWithEmail = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Logout
  const logout = () => signOut(auth);

  const value = {
    currentUser,
    loginWithGoogle,
    loginWithEmail,
    signupWithEmail,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
