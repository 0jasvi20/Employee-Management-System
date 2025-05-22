import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const data = useContext(AuthContext)

  useEffect(() => {
    if (data) {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
      if (loggedInUser) {
        setUser(loggedInUser)
      }
    }
  }, [data]);

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('loggedInUser')
  }

  if (!data.admin.email || !Array.isArray(data.employees) || data.employees.length === 0) {
    return <div>Loading...</div>
  }

  const handleLogin = (email, password) => {
    if (email === data.admin.email && password === data.admin.password) {
      setUser({ role: 'admin', email })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', email }))
      return
    }
    const employee = data.employees.find(
      (emp) => emp.email === email && emp.password === password
    )
    if (employee) {
      setUser({ role: 'employee', email })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email }))
      return
    }
    alert('Invalid')
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user && user.role === 'admin' && (
        <AdminDashboard onLogout={handleLogout} user={user} />
      )}
      {user && user.role === 'employee' && (
        <EmployeeDashboard onLogout={handleLogout} user={user} />
      )}
    </>
  )
}

export default App
