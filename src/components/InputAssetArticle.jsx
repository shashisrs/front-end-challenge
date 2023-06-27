import React from "react";
import leftArrow from "../assets/left-arrow.png"
import rightArrow from "../assets/right-arrow.png"
import arrowExpand from "../assets/arrow-expand.png"
import {BsThreeDots} from "react-icons/bs"
const InputAssetArticle = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 w-[90%] mx-auto p-2">
        <label for="title" className="font-semibold text-lg">
          Title
        </label>
        <input type="text" className="border p-2 shadow-md" id="title" />
      </div>

      <div className="w-[90%] mx-auto p-2 flex flex-col gap-2 ">
        <h4 className="font-semibold text-lg">Content</h4>
        <div className="border shadow-md">
          <div className="border shadow-md">
            <div className="flex justify-around flex-wrap text-sm text-[#616161] p-2">
              <button>File</button>
              <button>Edit</button>
              <button>View</button>
              <button>Insert</button>
              <button>Format</button>
              <button>Tools</button>
              <button>Table</button>
              <button>Help</button>
            </div>
            <div className="flex gap-3 ml-2 mb-2 items-center text-[#616161] p-2 text-sm">
              <button><img src={leftArrow} alt="leftArrow"/></button>
              <button><img src={rightArrow} alt="rightArrow"/></button>
              <button><img src={arrowExpand} alt="arrowExpand"/></button>
              <p className="text-xs p-1 pr-4 bg-[#EBEBEB]">Paragraph</p>
              <button><BsThreeDots/></button>
            </div>
          </div>
          <div>
            <textarea className="w-full min-h-[65px] sm:min-h-[150px] p-2 resize-none h-full"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputAssetArticle;
