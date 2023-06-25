import React from 'react'
import happy from "../../Images/mascot-happy.png"
import './Tasks.scss'
const Tasks = () => {
  return (
   <>
     <div className="task-div">
           <img className="mood" src={happy} />
            <span>Double Tap To Complete Task</span>
          </div>
   </>
  )
}

export default Tasks