"use client";
import React from "react";
import { useState, useEffect } from "react";
import BanerDataTwo from "../pages/api/BannerDataTwo/BannerDataTwo";
import { GoPlay } from "react-icons/go";
import Image from "next/image";
import IconBack from "../assets/close.svg";
import UserComment from "./UserComment";

const Banner = () => {

  
  const [bannerData, setBannerData] = useState([]);
  const [visibleIcon, setVisibleICon] = useState(false);
  const [visibleVideo, setVisibleVideo] = useState(false);
  const imgUrl = "https://img-monsternotebook.mncdn.com";

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await BanerDataTwo();

        if (result && result.data) {
          setBannerData(result.data);
        } else {
          console.error("No data received");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  const handleHover = () => {
    setVisibleICon(true);
  };
  const handleMouseLeave = () => {
    setVisibleICon(false);
  };
  const handeClikVideo = () => {
    setVisibleVideo(true);
  };
  // BOZUK APİ
  const banner = bannerData.map((data, index) => {
    const subTitle = data.parameters.find(
      (param) => param.name === "İçerik"
    )?.value;
    const title = data.parameters
      .find((param) => param.name === "Bailık")
      ?.value.replace(/<BR>/gi, "");
    const bannerImg = data.parameters.find(
      (param) => param.name === "Görsel"
    )?.value;
    const linkContents = data.parameters.find(
      (param) => param.name === "Link 2 Yazı"
    )?.value;

    return {
      key: index,
      subTitle,
      title,
      bannerImg,
      linkContents,
    };
  });

  return (
    <div className="bg-secondary overflow-hidden px-5 ">
      {/* Statik Tekli Banner */}
      <div className="relative   w-full h-[760px]  max-lg:h-full max-sm:h-full max-xl:h-full overflow-hidden">
        <div
          style={{
            backgroundImage: `url(https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/HOMEPAGE/anasayfa/Grid/2.png)`,
          }}
          className="absolute  top-0 max-xl:hidden right-0 bottom-0 left-0 bg-cover bg-center"
        ></div>
        <div className=" ">
          <div className="hidden max-xl:inline-block  ">
            <img
              className="img max-w-full h-auto"
              src="https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/HOMEPAGE/anasayfa/Grid/2.png"
              alt=""
            />
          </div>
          <div
            className="absolute max-lg:relative bottom-0 max-xl:top-0 max-xl:justify-between right-0 flex flex-col text-white w-[50%] h-[50%] p-8 
       max-lg:w-full max-lg:px-0"
          >
            <div className="mb-4 text-primary text-[36px] max-sm:text-3xl ">
              MÜKEMMEL OYUN DENEYİMİ.
            </div>
            <div className="mb-4 text-[24px] max-sm:text-2xl">
              OYUNDA KENDİNİZİ KAYBETSENİZ BİLE!
            </div>
            <div className="mb-4">
              <p className="text-[16px] leading-normal font-normal my-4">
                Monster Oyun Bilgisayarları Intel ve Nvidia’nın en üst
                donanımları ile, maksimum performans ve en mükemmel oyun
                deneyimini sunar. Kendi belirleyeceğiniz donanımlar ve
                oynadığınız oyunların gereksinimlerine göre hayalinizdeki
                bilgisayarı şimdi tasarlayın!
              </p>
            </div>
            <div className="text-yellow  text-[24px] leading-9 my-3 max-lg:flex max-lg:flex-col">
              <a
                href="#"
                className="mr-[36px] hover:underline pointer-events-auto"
              >
                OYUN BİLGİSAYARLARI
              </a>
              <span className="border-r text-center max-lg:hidden"></span>
              <a href="#" className="ml-[36px] hover:underline max-lg:ml-0">
                TÜM LAPTOPLAR
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* İkili Banner Api */}
      <div className="flex mt-4 bg-secondary overflow-hidden max-lg:flex-col   ">
        <div className="relative  h-[650px] max-lg:h-[580px] max-sm:h-[320px]  max-xl:h-[350px] w-full   overflow-hidden group">
          <div>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 bg-cover   opacity-60 bg-center transition-all  duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${imgUrl + banner[0]?.bannerImg})`,
              }}
            ></div>
            <div className="absolute flex flex-col justify-center max-sm:justify-between  items-start max-lg:pl-3 max-lg:justify-between w-1/2 h-full text-white ml-10 max-lg:ml-0">
              <div className="text-4xl max-lg:text-2xl max-xl:text-2xl text-primary max-lg:mt-[10px]  my-4 font-medium leading-normal">
                {banner[0]?.title}
              </div>
              <div className="flex">
                <p className="text-lg max-lg:text-base max-xl:text-sm  max-sm:justify-center max-sm:h-full mb-14 max-sm:truncate max-sm:w-[220px]  ">
                  {banner[0]?.subTitle}
                </p>
              </div>
              <div className="text-4xl max-lg:pb-[150px] max-xl:text-2xl max-sm:pb-0 text-primary hover:underline font-medium uppercase">
                <a href="/">{banner[1]?.linkContents}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ml-5 h-[650px] max-lg:h-[580px]  max-lg:mt-5 max-sm:h-[320px] max-xl:h-[350px] w-full max-lg:ml-0  overflow-hidden group">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 bg-cover  opacity-60 bg-center transition-all duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${imgUrl + banner[1]?.bannerImg})` }}
          ></div>
          <div className="absolute left-0 bottom-0 mb-5 max-lg:mx-0 mx-[28px] max-lg:ml-3 max-lg:mt-3 max-lg:top-0 text-4xl max-xl:text-lg max-lg:mb-0 max-lg:bg-no-repeat text-primary hover:underline font-medium p-5 max-lg:p-0">
            <div className="uppercase">
              <a href="/">{banner[1]?.linkContents}</a>
            </div>
          </div>
        </div>
      </div>
      {/* Video */}
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className="flex relative items-center justify-center mt-8   "
      >
        {visibleIcon ? (
          <div
            onClick={handeClikVideo}
            className="absolute animate-jump-in animate-once animate-ease-linear animate-normal animate-fill-forwards   text-primary  text-9xl"
          >
            <GoPlay />
          </div>
        ) : (
          <div
            onClick={handeClikVideo}
            className="absolute animate-jump-out animate-once animate-ease-linear animate-normal animate-fill-forwards
           text-primary  text-9xl"
          >
            <GoPlay />
          </div>
        )}
        {visibleVideo ? (
          <div className="w-screen relative">
            <iframe
              src="https://www.youtube.com/embed/0cu23VMqiuk"
              title="YouTube video player"
              className="h-[470px] w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div
              onClick={() => setVisibleVideo(false)}
              className="absolute flex justify-center items-center top-5 right-5 p-1 bg-primary cursor-pointer "
            >
              <Image src={IconBack} alt="back"></Image>
            </div>
          </div>
        ) : (
          <div className="">
            <div>
              <img
                className="w-screen"
                src="https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/HOMEPAGE/anasayfa/Grid/reklamtv.png"
                alt=""
              />
            </div>
            <div className="absolute bottom-10 max-lg:relative max-lg:bottom-0 max-lg:ml-0 max-lg:mt-10 max-md:mt-5 left-0 ml-[70px] border-l-2 border-primary max-lg:pl-0 pl-10 max-lg:border-none">
              <div className="text-white">
                <p className=" text-4xl max-lg:text-2xl max-md:text-xl">Çocukların Korkmadığı</p>
              </div>
              <div className="text-primary mt-2">
                <p className=" text-5xl max-lg:text-3xl max-md:text-2xl">TEK CANAVAR</p>
              </div>
              <div className="flex text-xl  mt-10 max-lg:mt-4 max-md:mt-2">
                <div className="bg-bgicon p-4 max-lg:p-2 max-lg:p-1 text-white flex items-center justify-center text-2xl">
                  {" "}
                  <GoPlay></GoPlay>
                </div>
                <div className="bg-light p-4 max-lg:p-2 max-lg:p-1  text-white flex items-center justify-center tracking-wider ">
                  İZLE
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Kullanıcı Yorumu */}
      <div className="mt-10">
      </div>
    </div>
  );
};
export default Banner;
