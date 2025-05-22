import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {
  const data = useContext(AuthContext)
  // Flatten all tasks and include employee name
  const allTasks = data.employees.flatMap(emp =>
    emp.tasks.map(task => ({
      ...task,
      employeeName: emp.first_name
    }))
  )

  return (
    <div className='bg-[#1c1c1c] p-5 rounder mt-10 h-60 overflow-auto'>
      {/* Table Header */}
      <div className="flex mb-2 justify-between items-center font-bold text-white border-b border-gray-500 pb-2">
        <h2 className="w-1/3">Employee</h2>
        <h3 className="w-1/3">Task Title</h3>
        <h3 className="w-1/3">Status</h3>
      </div>
      {/* Task Rows */}
      {allTasks.map((task, idx) => (
        <div
          key={idx}
          className={`flex mb-2 justify-between items-center text-black ${
            task.complete
              ? 'bg-green-400'
              : task.failed
              ? 'bg-pink-400'
              : task.new_task
              ? 'bg-blue-400'
              : 'bg-purple-400'
          } p-5 rounded`}
        >
          <h2 className="w-1/3">{task.employeeName}</h2>
          <h3 className="w-1/3">{task.title}</h3>
          <h3 className="w-1/3">
            {task.complete
              ? 'Complete'
              : task.failed
              ? 'Failed'
              : task.new_task
              ? 'New'
              : 'Active'}
          </h3>
        </div>
      ))}
    </div>
  )
}

export default Alltask