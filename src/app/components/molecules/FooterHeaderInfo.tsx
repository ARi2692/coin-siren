import React from 'react';
import Image from '../atoms/Image';
import logo2 from "../../../../public/logo2.png";

const FooterHeaderInfo: React.FC = () => {
  return (
    <>
          <Image src={logo2} alt="logo" width={200} height={200} className="py-4" />
          <p className="text-lg mb-4 text-left">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </p>
          <p className="text-lg text-left">전화: 010-0000-0000</p>
          <p className="text-lg text-left">이메일: aaaaa@naver.com</p>
    </>


          
  );
};

export default FooterHeaderInfo;
