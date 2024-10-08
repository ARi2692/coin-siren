"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "../atoms/Image"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface Profile {
  name: string;
  title: string;
  Exp: string;
  img: string;
  Skills: string[];
}

const ImageCard = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch("/api/data");
      const data: Profile[] = await response.json();
      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-8 mx-8 ">
      {profiles.length === 0 ? (
        <p className="text-white">Loading profiles...</p>
      ) : (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
          <Slider {...settings} className="w-full">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center p-4"
              >
                <Image
                  src={profile.img}
                  alt={profile.name}
                  width={250}
                  height={350}
                  className="mx-auto"
                />
                <div
                  className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2"
                  data-tooltip-id="tooltip"
                  data-tooltip-content="월 100만원"
                >
                  <div className="bg-green-500 text-white px-3 py-1 rounded-lg">
                    월 100만원
                  </div>
                </div>

                <Tooltip id="tooltip" place="top" delayShow={500} />

                <div className="text-center mt-2">
                  <h3 className="font-bold">{profile.name}</h3>
                  <p className="text-gray-600">{profile.title}</p>
                  <p className="text-gray-400">{profile.Exp}</p>
                  <ul className="flex flex-wrap justify-center mt-3 gap-3">
                    {profile.Skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="px-4 py-2 rounded-md text-sm border border-gray-300 shadow-sm text-gray-600 whitespace-nowrap"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
