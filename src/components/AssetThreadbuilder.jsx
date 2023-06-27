import React from "react";
import { SlArrowDown } from "react-icons/sl";
import ThreadTextArea from "./ThreadTextArea";
import ThreadSelect from "./ThreadSelect";
import bulb from "../assets/Vector (3).png";
import chatbox from "../assets/Vector (2).png";
import query from "../assets/Vector (1).png";
import icon from "../assets/Vector.png";
import CTAButton from "./CTAButton";
const AssetThreadbuilder = () => {
  return (
    <div className="relative h-[580px] w-full">
      <input
        type="checkbox"
        className=" absolute opacity-0 z-10 cursor-pointer w-full h-12 peer"
      />

      <div className="bg-[#feffc070] ">
        <h3 className="font-bold text-xl p-3 text-center">Thread A</h3>
      </div>

      {/* Arrow */}
      <div className="absolute font-bold left-4 text-lg top-4 transition-all duration-200 peer-checked:-rotate-180">
        <SlArrowDown />
      </div>

      {/* Content */}
      <div className="bg-white max-h-fit peer-checked:max-h-0 overflow-hidden transition-all duration-200">
        <div className="w-[90%] mx-auto flex flex-col gap-4">
          <div className="w-full mt-8 flex justify-between">
            <ThreadTextArea title="Sub thread 1"/>
            <ThreadTextArea title="Sub Interpretation 1"/>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 justify-between">
            <div></div>
            <div className="flex gap-2">
              <button>
                <img src={bulb} alt="" />
              </button>
              <button>
                <img src={chatbox} alt="" />
              </button>
              <button>
                <img src={query} alt="" />
              </button>
              <button>
                <img src={icon} alt="" />
              </button>
            </div>
            <div className="flex sm:flex-row flex-col items-center gap-2">
              <ThreadSelect />
              <ThreadSelect />
            </div>
          </div>
          <div className="text-white ">
            <CTAButton>+ Sub-thread</CTAButton>
          </div>
          <div className="flex">
          <div className="flex-grow">
          <ThreadTextArea title="Summary for Thread A"/>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetThreadbuilder;
