"use client";

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BodySection = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setIsTitleVisible(true);
    }, 600);

    return () => {
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <div
      className={`text-2xl font-bold underline text-white fade-in-up ${isTitleVisible ? "fade-in-up" : "opacity-0"} mt-4`}
    >
      개발자가 필요하신가요?
    </div>
  );
};

export default BodySection;
