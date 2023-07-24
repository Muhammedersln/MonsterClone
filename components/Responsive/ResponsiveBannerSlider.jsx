import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ResponsiveBannerSlider = ({ bannerImg, bannerTitle, buttonTitle }) => {
  const imgUrl = process.env.WEB_URL;
  return (
    <div className="">
      <div className="bg-secondary  pt-5 pl-4 ">
        <div className="bg-bgicon flex flex-col w-[280px] h-[490px] max-sm:h-[460px] border border-bordercolor">
          <div className="w-full mx-auto h-1/2 ">
            <img src={imgUrl + bannerImg} alt="" />
          </div>
          <div className="text-base flex flex-col justify-end h-1/2 items-start p-3 py-6">
            <div className="text-primary uppercase ">{bannerTitle}</div>

            <div className="text-yellow mt-20 flex items-center">
              <button className="uppercase">{buttonTitle}</button>
              <div className="ml-7 ">
                <FaLongArrowAltRight></FaLongArrowAltRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBannerSlider;
