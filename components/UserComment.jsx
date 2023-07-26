"use client";
import React from "react";
import UserCommentCard from "../UI/UserCommentCard";
import { useState } from "react";

const UserComment = () => {
  const [curr, setCurr] = useState(0);
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex-col gap-2 bg-black w-full h-full pt-10 overflow-hidden">
      <div className="px-24 max-lg:px-12 flex justify-between mb-5">
        <div>
          <p className="text-white text-[36px] max-lg:text-[20px]">Kullanıcı Yorumları</p>
        </div>
        <div className="flex items-center">
          <p className="text-primary text-[20px] max-lg:text-[16px]">DAHA FAZLA YORUM</p>
        </div>
      </div>
      <div
        style={{ transform: `translateX(-${curr * 313}px)` }}
        className="flex pl-24 mb-2 gap-3 transition-transform ease-in-out duration-500 w-screen flex cursor-pointer"
      >
        {" "}
        
        <UserCommentCard></UserCommentCard>
        <UserCommentCard></UserCommentCard>
      </div>
      <div className="flex mb-5 h-[80px] bottom-4 right-0 left-0">
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

export default UserComment;
