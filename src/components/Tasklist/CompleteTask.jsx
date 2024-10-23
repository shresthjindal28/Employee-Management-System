import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl">
    <div className="flex items-center justify-between">
        <h3 className='bg-red-500 px-3 py-1 rounded text-sm '>{data.category}</h3>
        <h4>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{date.title}</h2>
    <p className='text-sm mt-2'>{date.discription}</p>
    <div className="mt-4 flex justify-center">
        <button className='w-full bg-green-500 py-1 px-2 text-sm '>Complete</button>
    </div>
    </div>
  )
}

export default CompleteTask
