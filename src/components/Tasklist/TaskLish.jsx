import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskLish = ({data}) => {
  return (
    <div id='tasklist' className='mt-10 h-[55%] overflow-x-auto flex flex-col md:flex-row items-center justify-start  gap-5 flex-nowrap py-5 w-full '>
        {data.tasks.map((elem, idx )=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }
        })}

    </div>
  )
}

export default TaskLish
