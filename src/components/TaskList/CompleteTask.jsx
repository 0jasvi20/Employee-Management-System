import React from 'react'

const CompleteTask = ({ task }) => {
  return (
    <div className='flex-shrink-0 h-full w-[400px] bg-green-600 rounded-xl p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>{task.category}</h3>
        <h4 className='text-sm'>{task.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
      <p className='text-sm mt-2'>{task.description}</p>
      <div className='flex justify-center items-center mt-5'>
        <button className='bg-gray-600 text-white px-5 py-2 rounded-full mt-5 w-full' disabled>
          Completed
        </button>
      </div>
    </div>
  )
}

export default CompleteTask