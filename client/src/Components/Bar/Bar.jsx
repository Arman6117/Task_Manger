import React from 'react'
import './Bar.scss'
import '../../index.css'
import crt from "../../Images/create.png"
import CreateTask from '../CreateTask/CreateTask'
// import './styles.scss'
const Bar = () => {
  const showCreate = () =>
  {
    const create = document.querySelector('.createTask')
    create.classList.add('active')
  }
  return (
    <>
        <div className='bar'>
          <div className='create-btn  rounded-2xl  absolute border-2 border-black'>
            <img onClick={showCreate} src={crt} alt='create'/>
          </div>
         
        </div>
    </>
  )
}

export default Bar