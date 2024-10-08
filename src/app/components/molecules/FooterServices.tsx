import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const FooterServices: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <div className="flex flex-col p-4 m-2 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-lg">
          <FaCode className="text-3xl text-black" />
        </div>
        <p className="text-lg mt-2 text-left">해외 개발자 원격 채용</p>
        <div className="flex items-center mt-2 text-left">
          <p className="text-lg">바로가기</p>
          <FaRegArrowAltCircleRight className="ml-2" />
        </div>
      </div>

      <div className="flex flex-col p-4 m-2 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-lg">
          <IoPerson className="text-3xl text-black" />
        </div>
        <p className="text-lg mt-2 text-left">외국인 원격 채용 (비개발)</p>
        <div className="flex items-center mt-2 text-left">
          <p className="text-lg">바로가기</p>
          <FaRegArrowAltCircleRight className="ml-2" />
        </div>
      </div>

      <div className="flex flex-col p-4 m-2 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-lg">
          <p className="text-xl text-black">KOR</p>
        </div>
        <p className="text-lg mt-2 text-left">한국어 가능 외국인 채용</p>
        <div className="flex items-center mt-2 text-left">
          <p className="text-lg">바로가기</p>
          <FaRegArrowAltCircleRight className="ml-2" />
        </div>
      </div>

      <div className="flex flex-col p-4 m-2 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-lg">
          <IoIosSettings className="text-3xl text-black" />
        </div>
        <p className="text-lg mt-2 text-left">해외 개발자 활용 서비스</p>
        <div className="flex items-center mt-2 text-left">
          <p className="text-lg">바로가기</p>
          <FaRegArrowAltCircleRight className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default FooterServices;
