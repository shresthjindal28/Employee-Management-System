import React,{useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)


    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault()

        setNewTask({taskTitle, taskDescription, taskDescription, category, active:false, newTask:true, failed:false, completed:false})

        const data = userData

        userData.forEach(function(elem){
            if(asignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskCount.newTask = elem.taskCount.newTask + 1;
            }
        });
        setUserData(data)
        console.log(data);
        

        setAsignTo('')
        setCategory('')
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')
    }

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-col md:flex-row flex-wrap w-full items-start justify-between'>
            <div className="w-full md:w-1/2">
                <div className="">
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                    <input 
                     value={taskTitle}
                     onChange={(e)=>{
                        setTaskTitle(e.target.value)
                     }}
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5' type="text" placeholder='Make a UI Design' />
                </div>
                <div className="">
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task deadline</h3>
                    <input 
                        value={taskDate}
                        onChange={(e)=>{
                        setTaskDate(e.target.value)
                     }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5'  type="date" />
                </div>
                <div className="">
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                    <input 
                        value={asignTo}
                        onChange={(e)=>{
                        setAsignTo(e.target.value)
                        }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5'  type="text" placeholder='Employee Name'/>
                </div>
                <div className="">
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input 
                        value={category}
                        onChange={(e)=>{
                        setCategory(e.target.value)
                        }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5'  type="text" placeholder='design, dev, etc' />
                </div>
            </div>
            <div className="w-full md:w-2/5 flex flex-col items-start">
                <h3 className='text-sm text-gray-300 mb-0.5'>Task description</h3>
                <textarea
                    value={taskDescription}
                    onChange={(e)=>{
                    setTaskDescription(e.target.value)
                    }}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' placeholder='This is a description of the task' />
                <button className='bg-emerald-600 py-3 hover:bg-emerald-800 px-5 rounded text-sm mt-6 w-full' type="submit">Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask
