import React from "react";
import CTAButton from "./CTAButton";
import { data } from "../JSON_Data/data";
import AssetContainerTemplate from "./AssetContainerTemplate";
import questionMark from "../assets/questionMark.png";
import schedule from "../assets/schedule.png";
import meeting from "../assets/meeting.png";
import { GoDotFill } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
const HeroSection = () => {
  const [clicked,setClicked] =useState(true);
  const [open,setOpen] =useState(true);
  return (
    <div className="w-9/12 flex flex-col gap-8 mx-auto mt-5 mb-5">
      {/* Section 1 */}
      <div className=" flex flex-col md:flex-row items-start sm:items-center gap-4 text-white justify-between">
        <h2 className="text-[#0029FF]  text-3xl font-bold">
          Technical Project Management
        </h2>
        <CTAButton>Submit task</CTAButton>
      </div>

      {data.map((item, index) => {
        return (
          <div key={index}>
            {/* Section 2 */}
            <div className="flex flex-col gap-4 py-8 px-4 bg-[#E9ECEF] rounded-md">
              <h3 className="text-2xl font-bold">{item.tasks[0].task_title}</h3>
              <div className="text-sm">{item.tasks[0].task_description}</div>
            </div>
            {/* Section 3 */}
            <div className=" mx-auto mt-16 ">
              <AssetContainerTemplate assets={item.tasks[0].assets} />
            </div>
            {/* left sidebar */}
            <div className={`flex flex-col absolute shadow-xl bg-white  top-32 md:top-20 ${clicked?"md:-left-48 lg:-left-72 -left-[180px]":"left-0"} border rounded-lg md:w-[30vw] h-[75vh] transition-all duration-200`}>
              <div className="text-white flex relative w-[100%] justify-between bg-black p-4 rounded-t-lg font-bold">
                <h4>Journey Board</h4>
                <button onClick={()=>setClicked(!clicked)} className={`bg-white p-2 w-fit ${clicked?"":"rotate-180"} rounded-full`}>
                  <BsArrowRight className="h-4 w-4 text-black " />
                </button>
              </div>
              <div className="text-center flex flex-col items-start w-[80%] mx-auto">
                <div className="flex gap-3  items-center mt-4 mb-4 font-bold text-xs md:text-lg">
                  <GoDotFill />
                  {item.tasks[0].task_title}
                </div>
                <div>
                  <div className="flex gap-3 items-center mt-4 mb-4  text-xs md:text-lg">
                    <GoDotFill />
                    Technical Project Management
                  </div>
                  <div className="flex gap-3  items-center mt-4 mb-4 text-xs md:text-lg">
                    <GoDotFill />
                    Threadbuild
                  </div>
                  <div className="flex gap-3  items-center mt-4 mb-4  text-xs md:text-lg">
                    <GoDotFill />
                    Structure your pointers
                  </div>
                  <div className="flex gap-3 items-center mt-4 mb-4  text-xs md:text-lg">
                    <GoDotFill />
                    4SA Method
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Three fixed icon */}
      <div className="flex flex-col gap-2 items-center  bottom-2 fixed right-10 sm:right-6">
        <button className="bg-[#0029FF] md:p-4 p-2 h-8 w-8 md:h-16 md:w-16 rounded-full flex items-center justify-center">
          <img src={questionMark} alt="" />
        </button>
        <button className="bg-[#0029FF] md:p-4 p-2 h-8 w-8 md:h-16 md:w-16 rounded-full flex items-center justify-center">
          <img src={meeting} alt="" />
        </button>
        <button className="bg-[#0029FF] md:p-4 p-2 h-8 w-8 md:h-16 md:w-16 rounded-full flex items-center justify-center">
          <img src={schedule} alt="" />
        </button>
      </div>

      {/* right sidebar */}
      <div className={`flex border fixed shadow-xl bg-white md:w-[30vw]  top-32 md:top-20 ${open?"md:-right-48 lg:-right-80 -right-[180px]":"right-0 sm:max-w-xs"} h-fit`}>
        <div onClick={()=>setOpen(!open)}className="bg-black cursor-pointer text rounded-l-lg flex flex-col items-center gap-4 p-2 text-white">
          <div className="text-4xl">x</div>
          <div className="textOrientation h-fit ">Notice Board</div>
        </div>
        <div className="flex justify-center text-xl items-center mx-auto">
          This is a Notice Board.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
