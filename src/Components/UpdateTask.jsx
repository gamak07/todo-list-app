import React from 'react'
import Todo from './Todo'
import ClearTask from './ClearTask';

const UpdateTask = ({todoTask, completedTask, setTodoTask, setCompletedTask}) => {
  const toggleTodoCompletion = (id) => {
    setTodoTask(prevTodoTask =>
      prevTodoTask.map(taskItem =>
        taskItem.id === id ? { ...taskItem, completed: !taskItem.completed } : taskItem
      )
    );

    setCompletedTask(prevCompletedTask => {
      const existingTaskIndex = prevCompletedTask.findIndex(task => task.id === id);
  
      if (existingTaskIndex !== -1) {
        // Task already exists in completed tasks, remove it
        return prevCompletedTask.filter(task => task.id !== id);
      } else {
        // Task doesn't exist in completed tasks, add it
        const taskToAdd = todoTask.find(task => task.id === id);
        return [...prevCompletedTask, taskToAdd];
      }
    });
  }

  const clearAllTask = () =>{
    setTodoTask([])
    console.log(123);
  }

  const taskCount = todoTask.length
  
  return (
      <div className='flex flex-col p-[1rem] bg-[#000] w-[85%] gap-[2rem]'>
        <ul className='flex flex-col gap-[1rem]' >
          {todoTask.map((todo) => {
            return <Todo 
              text={todo.text}
              key={todo.id} 
              setTodoTask={setTodoTask}
              todo={todo}
              todoTask={todoTask}
              setCompletedTask={setCompletedTask}
              completedTask={completedTask}
              toggleTodoCompletion={toggleTodoCompletion}
            />
          })}
        </ul>
        <ClearTask clearAllTask={clearAllTask} taskCount={taskCount} />
      </div>
  )
}

export default UpdateTask