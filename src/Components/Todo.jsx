import React, { useEffect, useState } from 'react'
import DeleteTask from './DeleteTask'

const Todo = ({text, todo, setTodoTask, completedTask, todoTask, setCompletedTask, toggleTodoCompletion}) => {
    const [edited, setEdited] = useState(false)
    const [textEdit, setTextEdit] = useState(text !== undefined ? text: '')
    const [completed, setCompleted] = useState(false)
      useEffect(()=>{
        setCompleted(todo.completed)
      },[todo])
      
      
    const HandleTaskEdit = () =>{
      setEdited(true)
    }
    
    const HandleInputChange = (e) =>{
      setTextEdit(e.target.value)
    }
    const HandleEditedTask = () =>{
        setTodoTask(prevTodoTask => 
          prevTodoTask.map(taskItem => 
            taskItem.id===todo.id ? {...taskItem, text:textEdit}: taskItem
          )
          )
          setEdited(false)
        }
    
    // const { id, text, completed } = todo;

    const HandleTaskCompletion = () => {
          toggleTodoCompletion(todo.id)
    }
    
    
    return (
    <>
    <div className='flex items-center justify-between bg-[#B8AEB0]'>
      <div className='flex items-center justify-between w-[100%] pr-[10px]'>
        {edited ? (
          <div className='bg-[#B8AEB0] w-[fit-content] break-all px-[1rem] text-[25px] text-[#fff] font-[600]'>
            <input
            className='h-[2.5rem] w-[15rem] outline-[0] bg-[inherit] border-[0] '
            type="text"
            value={textEdit}
            onChange={HandleInputChange}
            onBlur={HandleEditedTask}
            />
          </div>
          
        ):
        (
          <li className='bg-[#B8AEB0] w-[fit-content] break-all px-[1rem] text-[25px] text-[#fff] font-[600]' onClick={HandleTaskEdit}>
          {text}
        </li>
        )}
        
        <input 
          type="checkbox"
          name="" id="" 
          checked={completed}
          onChange={HandleTaskCompletion}
        />
      
      </div>
          
      <DeleteTask todo={todo} setTodoTask={setTodoTask} todoTask={todoTask} />
    </div>
    </>
  )
}

export default Todo