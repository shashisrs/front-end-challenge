import React from "react";
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import tools from "../assets/tools.png";
// import notification from "../assets/notification.png";
import {FaBell} from "react-icons/fa"
import {GoDotFill} from "react-icons/go"
import {TbDotsVertical} from "react-icons/tb"

import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
const Navbar = () => {
  return (
    <nav className="shadow-md py-4">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row md:gap-0 gap-4 items-center md:justify-between justify-center">
        {/* logo */}
        <img src={logo} alt="" />
        {/* right part of navbar */}
        <div className="flex gap-4 items-center">
          <div className="bg-[#3683F0] rounded-full p-2">
            <Link  to="/">
              <img className=" text-white h-4 w-4 " src={home} alt="homeIcon" />
            </Link>
          </div>

          <div className="bg-[#3683F0] rounded-full p-2">
            <Link  to="/">
              <img className=" text-white h-4 w-4 " src={tools} alt="toolsIcon" />
            </Link>
          </div>

          <div className="rounded-full relative bg-[#3683F0] p-2">
          <GoDotFill className="absolute  text-red-900 bottom-3 left-3"/>
            <Link  to="/">
              <FaBell className="text-white h-4 w-4"/>
            </Link>
          </div>

          <div className="rounded-full p-2 border-blue-600 border">
            <Link  to="/">
              <img className=" text-white h-4 w-4 " src={profile} alt="profileIcon" />
            </Link>
          </div>

          <div className="rounded-full p-2 text-[#3683F0]">
            <Link  to="/">
            <TbDotsVertical className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
