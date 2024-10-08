"use client";

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BodySection = () => {
  const [isAdditionalVisible, setIsAdditionalVisible] = useState(false);

  useEffect(() => {
    const additionalTimer = setTimeout(() => {
      setIsAdditionalVisible(true);
    }, 900);

    return () => {
      clearTimeout(additionalTimer);
    };
  }, []);

  return (
    <>
      <div className="flex-1 border-t border-white pt-4 mr-12">
        <span className="text-white text-base font-bold">평균 월 120만원</span>
        <br />
        <span className="text-white text-base">
          임금을 해당 국가를 기준으로 계산합니다.
        </span>
      </div>
      <div className="flex-1 border-t border-white pt-4 mr-12">
        <span className="text-white text-base font-bold">최대 3회 인력교체</span>
        <br />
        <span className="text-white text-base">
          막상 채용해보니 맞지 않아도 걱정하지 마세요.
        </span>
      </div>
      <div className="flex-1 border-t border-white pt-4 mr-12">
        <span className="text-white text-base font-bold">
          평균 3일, 최대 10일
        </span>
        <br />
        <span className="text-white text-base">
          급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
        </span>
      </div>
    </>
  );
};

export default BodySection;
