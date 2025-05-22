import React, { useContext } from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask'
import Alltask from '../others/Alltask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = ({ onLogout, user }) => {
  const data = useContext(AuthContext)
  // Find admin by email (in case you want to support multiple admins)
  const admin = data.admin
  return (
    <div className="min-h-screen w-full bg-[#1c1c1c] p-8">
      <Header onLogout={onLogout} name={admin.first_name || 'Admin'} />
      <Createtask />
      <Alltask />
    </div>
  )
}

export default AdminDashboard