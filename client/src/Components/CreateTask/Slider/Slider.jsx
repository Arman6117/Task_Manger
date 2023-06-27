import React from "react";
import "./Slider.scss";

export let Name = ''
const Slider = (props) => {
 
  return (
    <>
      <div className="slider flex gap-10 w-40 h-2 bg-black absolute rounded-full top-52 left-14">
      <div className="s_thumb cursor-pointer bg-white rounded absolute  border-black left-0  transition-all duration-200 ease-in-out"></div>
        <div
          onClick={props.click}
          className="dots cursor-pointer bg-white rounded-full relative  border-black"
          name="lazy"
        ></div>
        <div
        onClick={props.click}
          className="dots cursor-pointer bg-white rounded-full relative  border-black"
          name="somewhat"
        ></div>
        <div
        onClick={props.click}
          className="dots cursor-pointer bg-white rounded-full relative  border-black"
          name="very"
        ></div>
        <div
        onClick={props.click}
          className="dots cursor-pointer bg-white rounded-full relative  border-black"
          name="hurry"
        ></div>
      </div>
    </>
  );
};

export default Slider;
