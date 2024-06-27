import React from 'react'

const DeleteTask = ({todo, setTodoTask, todoTask}) => {
    const HandleDeleteButton = () =>{
        setTodoTask(todoTask.filter((el) => el.id !== todo.id))
    }

  return (

    <div>
        <button 
          onClick={HandleDeleteButton}
          className='px-[2.5rem] py-[1rem] bg-[#fff] font-[600] text-[20px]'>
          Delete
        </button>
    </div>
  )
}

export default DeleteTask