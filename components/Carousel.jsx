"use client";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import left from "../assets/ChevronLeft.svg";
import right from "../assets/Chevronright.svg";
import BannerData from "../pages/api/BannerData/BannerData";
import Link from "next/link";
import Banner from "./BannerSlider";

const Carousel = ({ autoSlide = false, autoSlideInterval = 8000 }) => {
  const [curr, setCurr] = useState(0);
  const [banner, setBanner] = useState([]);
  const [link, setLink] = useState([]);
  useEffect(() => {
    if (banner.length > 0) {
      const links = banner.flatMap((item) => {
        const linkParam = item.parameters.find((param) => param.name === "Link");
        const linkValue = linkParam ? linkParam.value : null;
        return {
          link: linkValue,
        };
      });
      setLink(links);
    }
  }, [banner]);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await BannerData();

        if (result && result.data) {
          setBanner(result.data);
        } else {
          console.error("No data received");
        }
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);
  const slides = banner.map((data, index) => (
    <Banner
      key={index}
      bannerImg={
        data.parameters.find((param) => param.name === "Görsel")?.value
      }
      bannerTitle={data.parameters
        .find((param) => param.name === "Başlık")
        ?.value.replace(/<BR>/gi, "")}
      contents={
        data.parameters.find((param) => param.name === "İçerik Yazı")?.value
      }
      buttonTitle={
        data.parameters.find((param) => param.name === "Link Yazı")?.value
      }
      link={data.parameters.find((param) => param.name === "Link")?.value}
      textColor={
        data.parameters
          .find((param) => param.name === "Yazı Renk")
          ?.value.split("|")[0]
      }
      buttonVisibile={
        data.parameters.find((param) => param.value === "3380_7337_29")?.value
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
    <div className="max-lg:hidden">
      <div className="relative flex overflow-hidden ">
        <div
          className="transition-transform ease-in-out duration-500 w-screen flex cursor-pointer"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        {link.map((item,index) => (
            <Link href={item} key={index}>
            <div className="absolute inset-0 flex items-center justify-between p-4 mx-10 cursor-pointer">
              <button
                onClick={prev}
                className="p-1 rounded-full shadow bg-secondary border-2 border-[#a4a4a5] hover:border-white transition-all"
              >
                <Image src={left} width={40} height={40} alt="next" />
              </button>
              <button
                onClick={next}
                className="p-1 rounded-full shadow bg-secondary border-2 border-[#a4a4a5] hover:border-white transition-all"
              >
                <Image src={right} width={40} height={40} alt="prev" />
              </button>
            </div>
          </Link>
          ))}
        
      </div>
      <div className="bg-secondary flex h-[80px] bottom-4 right-0 left-0">
        <div className="flex mx-auto items-center justify-center gap-3">
          {slides.map((_, i) => (
            <div key={i}>
              <button
                onClick={() => setCurr(i)}
                className={`transition-all w-4 h-4 border-2 border-[#3d3e3f] ${
                  curr === i ? "bg-primary border-primary" : "bg-secondary"
                }`}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
