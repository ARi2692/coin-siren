import React from "react";

const FooterContact: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-4">
      <div className="flex flex-col w-full lg:w-1/2 p-4">
        <p className="text-lg font-bold">사업자등록번호 CIN</p>
        <p className="text-lg">427-86-01187</p>
        <p className="text-lg">U74110DL2016PTC290812</p>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 p-4">
        <p className="text-lg font-bold">주소 ADDRESS</p>
        <p className="text-lg">서울특별시 강남대로 479, 지하 1층 238호</p>
        <p className="text-lg">
          D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
          110053 India
        </p>
      </div>
    </div>
  );
};

export default FooterContact;
