import React, { useState } from "react";
import "./index.css";

//!COMPONENTS
import Tasks from "./Components/Tasks/Tasks";
import Bar from "./Components/Bar/Bar";
import CreateTask from "./Components/CreateTask/CreateTask";

const App = () => {
  const [task, setTask] = useState([]);

  //!CREATE
  const createTask = (value, background, img) => {
    const newTask = {
      text: value,
      bgColor: background,
      avatar: img,
    };
    setTask((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  //!DELETE
  const deleteTask = (id) => {
   setTask(prevTask =>
    {
       return prevTask.filter((taskItem,index)=>{
        return index !== id;
       })
    })
  };
  return (
    <>
      <div className="main">
        <div className="title">
          <span>
            Hello <span> Arman</span>
          </span>
          <span>
            Here's what you <br /> need to do
          </span>
        </div>
        <div className="tasks">
      
          {task.map((taskItem, index) => {
            return (
              <Tasks
                id={index}
                currentIndex={index}
                color={taskItem.bgColor}
                avatar={taskItem.avatar}
                task={taskItem}
                delete={deleteTask}
              />
            );
          })}
          <Tasks
               
               color='var(--l-green)'
               avatar={task.avatar}
               task="Double click to delete"
               delete={deleteTask}
             />
        </div>

        <Bar />
        <div className="create_task">
          <CreateTask create={createTask} />
        </div>
      </div>
    </>
  );
};

export default App;
