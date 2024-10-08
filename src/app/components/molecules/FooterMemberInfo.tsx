import React from "react";

const FooterMemberInfo: React.FC = () => {
  return (
    <div className="flex flex-col text-lg">
      <div className="flex justify-between w-full">
        <p className="text-lg">하이퍼하이어</p>
        <p className="text-lg">대표 CEO</p>
      </div>
      <div className="flex justify-between w-full">
        <p>상호명</p>
        <p className="text-lg">김주현</p>
      </div>
      <div className="flex justify-between w-full">
        <p>Hyperhire India Private Limited</p>
        <p className="text-lg">Juhyun Kim</p>
      </div>
    </div>
  );
};

export default FooterMemberInfo;
