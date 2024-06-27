import React from 'react'

const AddNewTask = ({setInputValue, inputText, todoTask, setTodoTask}) => {

    const HandleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const HandleSubmitButton = () =>{
        if (inputText !== "") {
            
        
        setTodoTask([
            ...todoTask, 
            {
                text: inputText, 
                completed: false, 
                id: Math.floor(Math.random()*100),
            }
                
        ])
        setInputValue("")
    }
    else{
        alert('Please, add a task ')
    }
}
    
  return (
    <div className='flex items-center justify-center gap-[1] h-[fit-content] w-[100%] bg-[#DC82B3] p-[2rem]'>
        <input 
            onChange={HandleInputChange}
            value={inputText}
            type="text" 
            placeholder='Add new task'
            className='h-[2.5rem] w-[15rem] rounded-l-[10px] outline-[0] px-[5px] placeholder:px-[5px]'
        />
        <button 
            onClick={HandleSubmitButton}
            className='h-[2.5rem] w-[5rem] border-[0] bg-[black] text-[#fff] rounded-r-[10px]'>Add task
        </button>
    </div>
  )
}

export default AddNewTask