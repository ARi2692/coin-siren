"use client";

import React from "react";

const InfoMobileView = () => {
  return (
    <div className="mt-4 p-2 rounded-md inline-flex flex-wrap space-x-2 space-y-2 text-white">
      <div className="flex items-center space-x-1">
        <input
          type="checkbox"
          checked
          className="form-checkbox text-white"
          readOnly
        />
        <span>한국어 능력</span>
      </div>
      <div className="flex items-center space-x-1">
        <input
          type="checkbox"
          checked
          className="form-checkbox text-white"
          readOnly
        />
        <span>업무 수행 능력</span>
      </div>
      <div className="flex items-center space-x-1">
        <input
          type="checkbox"
          checked
          className="form-checkbox text-white"
          readOnly
        />
        <span>겸임 여부</span>
      </div>
      <div className="flex items-center space-x-1">
        <input
          type="checkbox"
          checked
          className="form-checkbox text-white"
          readOnly
        />
        <span>평판 조회</span>
      </div>
    </div>
  );
};

export default InfoMobileView;
