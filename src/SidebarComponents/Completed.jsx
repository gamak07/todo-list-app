import React, { useState } from 'react'
import ClearTask from '../Components/ClearTask'


const Completed = ({completedTask, setCompletedTask}) => {
  const clearTask = () =>{
    setCompletedTask([])
    console.log(123);
  }

  const taskCount = completedTask.length
  console.log(taskCount);
  return (
    <div className='flex flex-col gap-[2rem] w-[85%] bg-[#000]'>
      <h1 className='text-[#ffffff] text-[30px] text-center'>Completed Tasks</h1>
      <div className='flex flex-col gap-[2rem] justify-between px-[1rem]'>
        <ul className='flex flex-col gap-[1rem] w-[100%]'>
        {completedTask && completedTask.map((tasks) =>{
          return <li className='flex items-center justify-between bg-[#B8AEB0] break-all pl-[1rem] text-[25px] text-[#fff] font-[600] py-[10px]' key={tasks.id}>
            {tasks.text}
          </li>
        })}
        </ul>
        <ClearTask clearAllTask={clearTask} taskCount={taskCount}/>
      </div>
    </div>
  )
}

export default Completed