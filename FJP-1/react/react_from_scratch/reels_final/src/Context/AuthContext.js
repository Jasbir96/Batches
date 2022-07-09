import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
const AuthContext = React.createContext()
//custom hook that allows components to access context data
export function useAuth() {
  return useContext(AuthContext)
} 
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login(email, password) {
    // console.log("ABCD");
    return auth.signInWithEmailAndPassword(email, password)
  }
  function logout() {
    return auth.signOut()
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
  useEffect(() => {
    // event listener 
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log(user);
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}