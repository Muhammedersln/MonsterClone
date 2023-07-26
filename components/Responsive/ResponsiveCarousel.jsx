"use client";
import React, { useState, useEffect } from "react";
import BannerData from "../../pages/api/BannerData/BannerData";
import Link from "next/link";
import ResponsiveBannerSlider from "../Responsive/ResponsiveBannerSlider";

const ResponsiveCarousel = ({
  autoSlide = false,
  autoSlideInterval = 8000,
}) => {
  const [curr, setCurr] = useState(0);
  const [banner, setBanner] = useState([]);
  const getData = async () => {
    const result = await BannerData();

    if (result && result.data) {
      setBanner(result.data);
    } else {
      console.error("No data received");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const slides = banner.map((data, index) => (
    <ResponsiveBannerSlider
      key={index}
      bannerImg={
        data.parameters.find((param) => param.name === "Görsel Mobil")?.value
      }
      bannerTitle={data.parameters
        .find((param) => param.name === "Başlık")
        ?.value.replace(/<BR>/gi, "")}
      buttonTitle={
        data.parameters.find((param) => param.name === "Link Yazı")?.value
      }
    />
  ));

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, slides.length, autoSlideInterval]);

  return (
    <div className="overflow-hidden">
      <div className="hidden max-lg:inline-block ">
        <div className="relative flex  ">
          <div
            className="transition-transform ease-in-out duration-500 w-screen flex cursor-pointer"
            style={{ transform: `translateX(-${curr * 296}px)` }}
          >
            {slides}
            {slides[0]}
            {slides[1]}
            {slides[2]}
          </div>
        </div>
        <div className="bg-secondary flex h-[50px] bottom-4 right-0 left-0">
          <div className="flex mx-auto  items-center justify-center gap-3 sm:gap-2 max-sm:ml-7">
            {slides.map((a, i) => (
              <div key={i}>
                <button
                  onClick={() => setCurr(i)}
                  className={`transition-all duration-300 w-2.5 h-2.5 border-2 border-[#3d3e3f] max-sm:flex-wrap ${
                    curr === i ? "bg-primary border-primary" : "bg-secondary"
                  }`}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
