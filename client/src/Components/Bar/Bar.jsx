import React from 'react'
import './Bar.scss'
import '../../index.css'
import crt from "../../Images/create.png"
import CreateTask from '../CreateTask/CreateTask'
// import './styles.scss'
const Bar = () => {
  return (
    <>
        <div className='bar'>
          <div className='create-btn  rounded-2xl  absolute border-2 border-black'>
            <img src={crt} alt='create'/>
          </div>
         
        </div>
    </>
  )
}

export default Bar