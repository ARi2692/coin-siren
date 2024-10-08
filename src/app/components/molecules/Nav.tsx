"use client"

import React from "react";
import logo1 from "../../../../public/logo1.png";
import Image from "../atoms/Image";
import Dropdown from "../atoms/Dropdown";

const Nav: React.FC = () => {
  return (
    <nav className="py-8">
      <div className="sm:px-6 lg:px-8 flex justify-evenly items-center">
        <div className="flex items-center">
          <Image
            src={logo1}
            alt="logo"
            width={180}
            height={200}
            className="mx-auto"
          />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Dropdown />
          <a
            href="#"
            className="text-white hover:text-gray-200 text-lg font-medium"
          >
            해외 개발자 활용 서비스
          </a>
        </div>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md text-lg font-medium">
            문의하기
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
