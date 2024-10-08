"use client";

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fadeInUpAnimation = `
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in-up {
    animation: fadeInUp 500ms ease forwards;
  }

  .fade-in {
    transition-opacity: 500ms;
    opacity: 0;
  }

  .fade-in.visible {
    opacity: 1;
  }

  @media (max-width: 640px) {
    /* Include all the mobile-specific styles from the first version here */
  }
`;

const BodySection = () => {
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const subtitleTimer = setTimeout(() => setIsSubtitleVisible(true), 300);
    const titleTimer = setTimeout(() => setIsTitleVisible(true), 600);

    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <>
      <style>{fadeInUpAnimation}</style>

      <div className="relative flex items-center text-xl">
        <div className="bg-white shadow-md rounded-md px-4 py-2 flex items-center mobile-color-change">
          <span className={`text-cyan-500 font-bold transition-opacity duration-500 ${isSubtitleVisible ? "fade-in visible" : "fade-in"} mobile-color-text`}>
            풀타임, 파트타임
          </span>
        </div>
      </div>

      <div className={`text-5xl font-bold text-white ${isTitleVisible ? "fade-in-up" : "opacity-0"} mt-4`} style={{ fontFamily: "Poppins" }}>
        최고의 실력을 가진 외국인 인재를 찾고 계신가요?
      </div>

      <div className={`text-2xl text-white font-bold fade-in-up ${isTitleVisible ? "fade-in-up" : "opacity-0"} mt-4`}>
        법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
      </div>
    </>
  );
};

export default BodySection;