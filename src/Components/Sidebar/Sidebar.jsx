import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'

const Sidebar = () => {
const location = useLocation()
const [active, setActive] = useState(null)

useEffect(() =>{
  setActive(location.pathname)
},[location])


  return (
    <div className='bg-[#B8AEB0] w-[15%]'>
        <ul className='flex flex-col'>
            <li className={`p-[10px] ${active === '/' && 'bg-[#fff] text-[#000]'}`}><Link to={"/"}>Tasks</Link></li>
            <li className={`p-[10px] ${active === '/addtask' && 'bg-[#fff]'}`}><Link to={"/addtask"}>Completed</Link></li>
            <li className={`p-[10px] ${active === '/deleted' && 'bg-[#fff]'}`}><Link to={"/deleted"}>Deleted</Link></li>
        </ul>       
    </div>
  )
}

export default Sidebar