import React from 'react'
import './Bar.scss'
import '../../index.css'
import crt from "../../Images/create.png"
// import './styles.scss'
const Bar = () => {
  return (
    <>
        <div className='bar'>
          <div className='create-btn  rounded-2xl  absolute border-2 border-black'>
            <img src={crt} alt='create'/>
          </div>
          <div className='create_task'>
            
          </div>
        </div>
    </>
  )
}

export default Bar