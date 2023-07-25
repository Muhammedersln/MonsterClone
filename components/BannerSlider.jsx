"use client";

import React from "react";
import arrow from "../assets/ArrowRight.svg";
import Image from "next/image";
import Link from "next/link";

const BannerSlider = ({
  bannerImg,
  bannerTitle,
  contents,
  buttonTitle,
  textColor,
  buttonVisibile,
  link,
}) => {
  const imgUrl = "https://img-monsternotebook.mncdn.com";
  const handleButtonClick = () => {
    window.location.href = link; // Sayfayı belirtilen linke yönlendir
  };
  return (
    <div>
      <div
        href={link}
        style={{ backgroundImage: `url(${imgUrl + bannerImg})` }}
        className=" bg-cover bg-center  h-[456px] w-screen z-50 relative "
      >
        <div className="absolute inset-0 z-50 flex items-center justify-start container mx-auto">
          <div className=" text-white  container ml-[120px]  ">
            <p
              className="  w-[45%] text-[25px]  uppercase tracking-[2px] "
              style={{ color: textColor }}
            >
              {bannerTitle}
            </p>
            <p className="my-10  text-lg w-[35%] " style={{ color: textColor }}>
              {contents}
            </p>

            {buttonVisibile !== "3380_7337_29" && (
              <Link href={link}>
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="bg-black border  border-yellow uppercase text-white w-[25%]  cursor-pointer"
                >
                  <div className="flex justify-between px-2  text-center   ">
                    <div className="text-center p-3 text-[20px] ">
                      {buttonTitle}
                    </div>
                    <Image
                      src={arrow}
                      width={30}
                      height={30}
                      alt="arrow"
                      className="text-yellow mr-5"
                    />
                  </div>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
