import React from "react";
// import Container from './Components/Container/Container'
import "./index.css";

//!COMPONENTS
import Tasks from "./Components/Tasks/Tasks";
import Bar from "./Components/Bar/Bar";
import CreateTask from "./Components/CreateTask/CreateTask";

const App = () => {
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
          <Tasks />
        </div>
        
        <Bar />
        <div className='create_task'>
            <CreateTask />
          </div>
      </div>
      </>
  );
};

export default App;
