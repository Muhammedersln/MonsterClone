import React from "react";

const UserCommentCard = () => {
  return (
    <div>
      <div className="border border-bordercolor w-[300px] hover:border-primary duration-300">
        <div className="">
          <img
            className=""
            src="https://img-monsternotebook.mncdn.com/UPLOAD/urun-gorselleri-yeni/HUMA/haziran_2023_kampanya/thumb/H5-V4-Silver_small.png"
            alt="png"
          />
        </div>
        <div className="pl-4 pr-4 w-full mb-10">
          <div className="text-lg text-primary block mb-3">
            <p>HUMA H5 V4.1.10 15,6" İş Bilgisayarı - Gümüş</p>
          </div>
          <div className="text-white font-bold text-base mb-3">
            <p>diğer markaların sunmadığı her şey var</p>
          </div>
          <div className="text-yellow mb-">4 yıldız </div>
          <div className="text-[#a4a4a5] text-xs mt-2">
            <p>
              huawei marka laptobun yetersiz kalması sebebi ile aldım çok uzun
              süre araştırma yaptım baya bir markaya .,.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCommentCard;
