import React from "react";
import "./CreateTask.scss";
import Slider from "./Slider/Slider";
import Happy from "../../Images/mascot-happy.png";
import Angry from "../../Images/mascot-angry.png";
import Diss from "../../Images/mascot-diss.png";
import Normal from "../../Images/mascot-normal.png";
const CreateTask = () => {
  let name
  const handleClick = (e) => {
    const create = document.querySelector(".createTask");
    const txt = document.querySelector(".u_txt");
    name = e.target.getAttribute("name");
  
    // let visible = false;
    switch (name) {
      case "lazy":
        create.style.background = "var(--l-green)";
        txt.innerHTML = "Be lazy";
        
        break;
      case "somewhat":
        create.style.background = "var(--blue)";
        txt.innerHTML = "Somewhat";

        break;
      case "very":
        create.style.background = "var(--purple)";
        txt.innerHTML = "Very Very";
        break;
      case "hurry":
        create.style.background = "var(--red)";
        txt.innerHTML = "HURRY!!!";
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="createTask rounded-t-3xl py-5 transition-all duration-300 ease-in-out">
        <span className=" text-lg font-medium relative block">
          How urgent is it ?
        </span>
        <img src={Happy} className=" absolute left-0 h-img" alt="" />
        <img src={Normal} className=" absolute left-0 n-img" alt="" />
        <img src={Diss} className=" absolute left-0 d-img" alt="" />
        <img src={Angry} className=" absolute left-0 a-img" alt="" />
        <span className="u_txt font-medium absolute top-40 transition-all duration-300 ease-in-out">
          Be Lazy
        </span>
        <div className="sliderBtn">
          <Slider click={handleClick} />
        </div>
      </div>
    </>
  );
};

export default CreateTask;
