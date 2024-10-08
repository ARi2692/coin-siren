"use client";

import React, { useState, useEffect } from "react";
import FooterHeaderInfo from "../molecules/FooterHeaderInfo";
import FooterMemberInfo from "../molecules/FooterMemberInfo";
import FooterCopywrite from "../molecules/FooterCopywrite";
import FooterServices from "../molecules/FooterServices";
import FooterContact from "../molecules/FooterContact";

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-[#FBFBFB] text-black flex py-4 justify-center w-full">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col justify-left w-full lg:w-1/3 sm:px-6 lg:px-8">
          <FooterHeaderInfo />
          {!isMobile && (
            <>
              <FooterMemberInfo />
              <FooterCopywrite />
            </>
          )}
        </div>
        {!isMobile && (
          <div className="flex flex-col justify-center items-start w-full lg:w-2/3 mt-8 lg:mt-0">
            <FooterServices />
            <FooterContact />
          </div>
        )}
        {isMobile && (
          <>
            <div className="flex flex-col justify-center items-start w-full lg:w-2/3 mt-8 lg:mt-0">
              <FooterServices />
              <FooterMemberInfo />
              <FooterContact />
            </div>
          </>
        )}
        {isMobile && <FooterCopywrite />}
      </div>
    </footer>
  );
};

export default Footer;
