import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskNo from '../others/TaskNo'
import Tasklist from '../TaskList/Tasklist'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = ({ onLogout, user }) => {
  const data = useContext(AuthContext)
  const employee = data.employees.find(emp => emp.email === user.email)

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header onLogout={onLogout} name={employee?.first_name || 'Employee'} />
      <TaskNo taskNumbers={employee?.task_numbers} />
      <Tasklist employee={employee} />
    </div>
  )
}

export default EmployeeDashboard