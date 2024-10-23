import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex flex-wrap md:flex-nowrap mt-10 justify-between gap-5 screen'>
      <div className="p-7 rounded-xl w-full md:w-[40%] bg-red-300">
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className="py-7 px-7 rounded-xl w-full md:w-[40%]  bg-emerald-300">
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className="py-7 px-7 rounded-xl w-full md:w-[40%] bg-blue-300">
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className="py-7 px-7 rounded-xl w-full md:w-[40%] bg-yellow-300">
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumber
