import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  
  return (
    <div id='alltask' className='w-full bg-[#1C1C1C] p-5 mt-5 h-60  rounded'>

      <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 mb-4 py-2 px-4 flex justify-between rounded">
        <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>
      </div>

    <div id='alltask' className="overflow-auto">
      {userData.map(function(elem, idx){
            return (
              <div key={idx} className="bg-gradient-to-b from-black via-gray-900 to-gray-800 mb-4 py-2 px-4 flex justify-between rounded">
              <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
              <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.newTask}</h3>
              <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
              <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCount.completed}</h5>
              <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
            </div>
      )})}
    </div>

    </div>
  )
}

export default AllTask
