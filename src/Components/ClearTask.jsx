import React from 'react'

const ClearTask = ({clearAllTask, taskCount}) => {
  return taskCount > 1 ? (
    <button 
        className='px-[2.5rem] py-[1rem] bg-[#fff] font-[600] text-[20px] w-[fit-content] justify-self self-end'
        onClick={clearAllTask}>
            ClearTask
    </button>
    ): null
}

export default ClearTask