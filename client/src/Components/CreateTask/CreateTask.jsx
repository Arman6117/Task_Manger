import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CreateTask.scss";
import Slider from "./Slider/Slider";
import Happy from "../../Images/mascot-happy.png";
import Angry from "../../Images/mascot-angry.png";
import Diss from "../../Images/mascot-diss.png";
import Normal from "../../Images/mascot-normal.png";
import Check from "../../Images/check.png";

const CreateTask = () => {
  const [selectedImg, setSelectedImg] = useState(Happy);
  const [Id, setID] = useState("");
  let name;
  const handleClick = (e) => {
    const create = document.querySelector(".createTask");
    const txt = document.querySelector(".u_txt");
    const thumb = document.querySelector(".s_thumb");
    name = e.target.getAttribute("name");

    switch (name) {
      case "lazy":
        create.style.background = "var(--l-green)";
        txt.innerHTML = "Be lazy";
        setSelectedImg(Happy);
        setID("h-img");
        thumb.style.left = "0";
        break;

      case "somewhat":
        create.style.background = "var(--blue)";
        txt.innerHTML = "Somewhat";
        setSelectedImg(Normal);
        setID("n-img");
        thumb.style.left = "3rem";
        break;

      case "very":
        create.style.background = "var(--purple)";
        txt.innerHTML = "Very Very";
        setSelectedImg(Diss);
        setID("d-img");
        thumb.style.left = "6rem";

        break;

      case "hurry":
        create.style.background = "var(--red)";
        txt.innerHTML = "HURRY!!!";
        setSelectedImg(Angry);
        setID("a-img");
        thumb.style.left = "9rem";

        break;

      default:
        create.style.background = "var(--l-green)";
        txt.innerHTML = "Be lazy";
        setSelectedImg(Happy);
        setID("h-img");
        thumb.style.left = "0";

        break;
    }
  };
  const removeCreate = ()=>
  {
    const create = document.querySelector('.createTask')
    create.classList.remove('active')
  }

  return (
    <>
      <div className="createTask rounded-t-3xl py-5 transition-all duration-300 ease-in-out">
        <span className=" text-lg font-medium relative block">
          How urgent is it ?
        </span>
        <motion.img
          initial={{ scale: "0" }}
          whileInView={{ scale: "0.3" }}
          src={selectedImg}
          className=" absolute left-0 img  transition-all duration-200 ease-in-out"
          id={Id}
          alt=""
        />
        <motion.span
          initial={{ scale: "0" }}
          whileInView={{ scale: "1" }}
          className="u_txt font-medium absolute top-40 transition-all duration-300 ease-in-out"
        >
          Be lazy
        </motion.span>
        <div className="sliderBtn">
          <Slider click={handleClick} />
        </div>
        <div className="input  absolute">
          <motion.input
          initial={{width:"0"}}
          whileInView={{width:"16rem"}}
            className="task_input w-64 h-8 rounded-full left-2.5 outline-none pl-5 border-2 border-black font-bold color-black"
            placeholder="Add Task"
          />
          <button className="t_btn absolute left-52" type="submit" onClick={removeCreate}>
            <motion.img
            initial={{width:'0'}}
            whileInView={{width:'55px'}}
              alt=""
              src={Check}
              className="btn_img"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
