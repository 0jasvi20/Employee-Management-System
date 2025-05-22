import React from 'react'

const TaskNo = ({ taskNumbers }) => {
  if (!taskNumbers) return null
  return (
    <div className="flex flex-wrap mt-10 gap-5 justify-between">
      <div className="rounded-xl flex-1 min-w-[180px] py-6 px-6 bg-red-200">
        <h2 className="text-3xl font-semibold text-black">{taskNumbers.active}</h2>
        <h3 className="text-3xl font-medium text-black">Active</h3>
      </div>
      <div className="rounded-xl flex-1 min-w-[180px] py-6 px-6 bg-blue-200">
        <h2 className="text-3xl font-semibold text-black">{taskNumbers.complete}</h2>
        <h3 className="text-3xl font-medium text-black">Complete</h3>
      </div>
      <div className="rounded-xl flex-1 min-w-[180px] py-6 px-6 bg-purple-200">
        <h2 className="text-3xl font-semibold text-black">{taskNumbers.new_task}</h2>
        <h3 className="text-3xl font-medium text-black">New Task</h3>
      </div>
      <div className="rounded-xl flex-1 min-w-[180px] py-6 px-6 bg-green-200">
        <h2 className="text-3xl font-semibold text-black">{taskNumbers.failed}</h2>
        <h3 className="text-3xl font-medium text-black">Failed</h3>
      </div>
    </div>
  )
}

export default TaskNo