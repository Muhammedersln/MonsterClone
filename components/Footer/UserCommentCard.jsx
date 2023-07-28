import React from "react";

const UserCommentCard = () => {
  return (
    <div>
      <div className="border border-bordercolor w-[300px] hover:border-primary duration-300 ">
        <div className="flex justify-center">
          <img
            width={244}
            height={160}
            src="https://img-monsternotebook.mncdn.com/UPLOAD/urun-gorselleri-yeni/HUMA/haziran_2023_kampanya/thumb/H5-V4-Silver_small.png"
            alt="png"
          />
        </div>
        <div className="flex flex-col px-[15px] mb-5 mt-10 ">
          <div className="text-lg text-primary">
            HUMA H5 V4.1.10 15,6" İş Bilgisayarı - Gümüş
          </div>
          <div className="text-white text-base font-bold mb-3">
            diğer markaların sunmadığı her şey var
          </div>
          <div className="text-yellow mb-4">4 yıldız </div>
          <div className="text-[#a4a4a5] text-sm mt-2 ">
            huawei marka laptobun yetersiz kalması sebebi ile aldım çok uzun
            süre araştırma yaptım baya bir markaya .,.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCommentCard;
