import React from "react";
import Link from "next/link";

const LoginSıgnin = () => {
  return (
    <div className="absolute bottom- right-0 p-5 bg-secondary border border-light ">
      <div className="bg-primary px-10 py-2 text-center text-black mb-3 ">
        <Link className=" text-base" href={"/"}> <span>GİRİŞ YAP</span></Link>
      </div>
      <div className="border px-10 py-2  border-yellow text-center  ">
        <Link className= "text-base text-white" href={"/"}> <span>HEMEN ÜYE OLUN!</span></Link>
      </div>
    </div>
  );
};

export default LoginSıgnin;
