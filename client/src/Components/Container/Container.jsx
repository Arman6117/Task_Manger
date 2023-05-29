import React from "react";
import './Container.css'

//!COMPONENTS
import Tasks from "./Tasks/Tasks";
import Bar from "../Bar/Bar"
const Container = () => {
  return (
    <div className="main">
      <div className="title">
        <span>
          Hello <span>Arman</span>
        </span>
        <span>
          Here's what you <br /> need to do
        </span>
        
      </div>
      <div className="tasks">
         <Tasks />
        </div>
        <Bar/>
    </div>
  );
};

export default Container;
