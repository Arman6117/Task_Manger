import React from "react";
import "./Tasks.scss";
import Happy from "../../Images/mascot-happy.png";
const Tasks = (props) => {
  const deleteTask = () => {
    props.delete(props.id);
  };
  const deleteCurrent = () => {
    const taskDiv = document.querySelector(".task-div");
    if (taskDiv) {
      taskDiv.style.display = "none";
    }
  };
  return (
    <>
      <div
        style={{ background: props.color, cursor: "pointer" }}
        onDoubleClick={() => {
          deleteTask();
          deleteCurrent();
        }}
        className="task-div"
      >
        <img className="mood" alt="" src={props.avatar || Happy} />
        <span>{props.task.text || props.task}</span>
      </div>
    </>
  );
};

export default Tasks;
