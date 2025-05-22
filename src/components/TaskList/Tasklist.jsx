import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({ employee }) => {
  const tasks = employee?.tasks || []

  // Filter tasks by status
  const activeTasks = tasks.filter(task => task.active)
  const newTasks = tasks.filter(task => task.new_task)
  const completeTasks = tasks.filter(task => task.complete)
  const failedTasks = tasks.filter(task => task.failed)

  return (
    <div id='tasklist' className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[50%] w-full mt-10 py-5'>
      {activeTasks.map((task, idx) => <AcceptTask key={`active-${idx}`} task={task} />)}
      {newTasks.map((task, idx) => <NewTask key={`new-${idx}`} task={task} />)}
      {completeTasks.map((task, idx) => <CompleteTask key={`complete-${idx}`} task={task} />)}
      {failedTasks.map((task, idx) => <FailedTask key={`failed-${idx}`} task={task} />)}
    </div>
  )
}

export default Tasklist