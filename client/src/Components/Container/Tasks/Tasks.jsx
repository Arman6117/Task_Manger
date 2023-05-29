import React from 'react'
import happy from "../../../Images/mascot-happy.png"
import './Tasks.css'
const Tasks = () => {
  return (
   <>
     <div className="task-div">
           <img className="mood" src={happy} />
            <span>Task1</span>
          </div>
   </>
  )
}

export default Tasks