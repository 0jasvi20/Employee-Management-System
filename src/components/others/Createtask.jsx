import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Createtask = () => {
  const data = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [taskAssigned, setTaskAssigned] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const employeeIndex = data.employees.findIndex(
      emp => emp.first_name.toLowerCase() === taskAssigned.trim().toLowerCase()
    )
    if (employeeIndex === -1) {
      alert('Employee not found!')
      return
    }
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: taskCategory,
      active: true,
      new_task: true,
      complete: false,
      failed: false
    }
    // Save to localStorage (for demo only, not reactive)
    const employees = JSON.parse(localStorage.getItem('employees')) || data.employees
    employees[employeeIndex].tasks.push(newTask)
    localStorage.setItem('employees', JSON.stringify(employees))
    console.log('Updated tasks for', employees[employeeIndex].first_name, employees[employeeIndex].tasks)
    alert(`Task "${taskTitle}" assigned to ${employees[employeeIndex].first_name}!`)
    // Reset form
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setTaskCategory('')
    setTaskAssigned('')
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-[#23272f] rounded-xl shadow-2xl p-10">
      <h2 className="text-3xl font-bold mb-8 text-white">Create New Task</h2>
      <form className="flex flex-wrap gap-8" onSubmit={handleSubmit}>
        <div className="flex-1 min-w-[250px] space-y-6">
          <div>
            <label className="block text-gray-300 font-medium mb-2">Task Title</label>
            <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={e => setTaskTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 bg-[#181b20] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Date</label>
            <input
              type="date"
              value={taskDate}
              onChange={e => setTaskDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 bg-[#181b20] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Assign to</label>
            <input
              type="text"
              placeholder="Employee name"
              value={taskAssigned}
              onChange={e => setTaskAssigned(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 bg-[#181b20] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Category</label>
            <input
              type="text"
              placeholder="design, dev, etc"
              value={taskCategory}
              onChange={e => setTaskCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 bg-[#181b20] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </div>
        <div className="flex-1 min-w-[250px] flex flex-col">
          <label className="block text-gray-300 font-medium mb-2">Description</label>
          <textarea
            placeholder="Description"
            value={taskDescription}
            onChange={e => setTaskDescription(e.target.value)}
            className="flex-1 min-h-[150px] px-4 py-2 border border-gray-600 bg-[#181b20] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition"
          />
        </div>
        <div className="flex justify-end mt-10 w-full">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition text-lg"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default Createtask