import React , { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddTask from './Components/AddTask'
import UpdateTask from './Components/UpdateTask'
import Completed from './SidebarComponents/Completed'
import Deleted from './SidebarComponents/Deleted'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [inputText, setInputText] = useState('')
  const [todoTask, setTodoTask] = useState([])
  const [completedTask, setCompletedTask] = useState([])

  return (
    <BrowserRouter>
      <div className='flex flex-col items-center h-[100vh] w-[100%] m-[auto]'>
        <AddTask
          inputText = {inputText} 
          setInputValue={setInputText}
          todoTask = {todoTask}
          setTodoTask = {setTodoTask}
          completedTask = {completedTask}
          setCompletedTask = {setCompletedTask}
        />
        <div className='flex flex-1 justify-between w-[100%]'>
          <Sidebar />
            <Routes>
                <Route path='/' element={<UpdateTask setTodoTask={setTodoTask} todoTask={todoTask} completedTask={completedTask} setCompletedTask={setCompletedTask}/>}></Route>
                <Route path='/addtask' element={<Completed completedTask={completedTask} setCompletedTask={setCompletedTask}/>}></Route>
                <Route path='/deleted' element={<Deleted />}></Route>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
     
  )
}

export default App
