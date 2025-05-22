import React, { useState, useEffect, createContext } from 'react'
import data from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: {} })

  useEffect(() => {
    // Load mock data from localStorage.js
    setUserData({ employees: data.employees, admin: data.admin })
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider