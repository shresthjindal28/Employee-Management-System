import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskLish from '../Tasklist/TaskLish'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber  data={props.data}/>
      <TaskLish data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
