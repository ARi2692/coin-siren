"use client";

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import InfoMobileView from "../molecules/InfoMobile";
import InfoDesktopView from "../molecules/InfoDesktop";
import Info from "../molecules/Info";
import HeadingInfo from "../molecules/HeadingInfo";
import ImageCard from "../molecules/ImageCard";

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
`;

const BodySection = () => {
  const [isAdditionalVisible, setIsAdditionalVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const additionalTimer = setTimeout(() => {
      setIsAdditionalVisible(true);
    }, 900);

    return () => {
      clearTimeout(additionalTimer);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <style>{fadeInUpAnimation}</style>
      <div className="flex flex-col sm:flex-row w-full max-w-screen-2xl mx-auto px-4 py-8">
        <div className="w-full sm:w-1/2 flex flex-col space-y-6">
          <HeadingInfo />
          {!isMobile && <Info />}
          {!isMobile && (
            <div
              className={`text-lg flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 ${isAdditionalVisible ? "fade-in-up" : "opacity-0"}`}
            >
              <InfoDesktopView />
            </div>
          )}
        </div>
        <ImageCard />
        {isMobile && (
          <>
            <div
              className={`text-lg flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 ${isAdditionalVisible ? "fade-in-up" : "opacity-0"}`}
            >
              <InfoMobileView />
            </div>
            <Info />
          </>
        )}
      </div>
    </div>
  );
};

export default BodySection;
