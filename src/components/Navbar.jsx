import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";
import React from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdAutoGraph } from "react-icons/md";

const Navbar = () => {
  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-2"
    >
      <h1 className="font-bold text-gray-300">Dashboard</h1>
      <div className="py-2 flex">
        <TextInput className="w-1/2 " icon={SearchIcon} placeholder="Search... " />
        <FaBell className="w-1/2" color="white" size={40}/>
        <BiSolidMessageSquareDetail className="w-1/2" color="white" size={40}/>
        <MdAutoGraph className="w-1/2"color="white" size={40}/>
        <RxAvatar className="w-1/2" color="white" size={40}/>
      </div>
    </div>
  );
};

export default Navbar;
