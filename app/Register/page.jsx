"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
const Login = () => {
  const [wrong, setWrong] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setMail(event.target.value);
    setPassword(event.target.value);
    console.log(mail);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };


  return (
    <div className="bg-secondary pt-[2rem]">
      <div className=" w-[51rem] text-center  container mx-auto ">
        {wrong && (
          <p className="bg-red-900 ">
            Farklı Şifre Giriniz
          </p>
        )}
      </div>
      <div className="  flex   w-full h-full text-white  justify-center contianer  ">
        <div className="flex-col w-[25rem]  ">
          <h3 className="text-center m-8 text-[1.7rem]">Hoş Geldiniz</h3>

          <div className="border border-secondary  p-1  ">
            <button className=" hover:text-primary hover:bg-opacity-60 hover:transition-all active:text-primary py-2  bg-dark w-[50%]">
              <Link href={"../Login"}>GİRİŞ YAP </Link>
            </button>

            <button className="hover:text-primary hover:bg-opacity-60   py-2 bg-dark w-[50%] ">
              <Link href={"../Register"}> ÜYE OL</Link>
            </button>
          </div>
          <div className="">
            <p className="text-white my-4">* Ad</p>
            <input
              onChange={handleChange}
              type="text"
              className="selection::border-primary bg-dark w-full border py-2 h-[50px] border-[#49494a]"
            />
          </div>
          <div>
            <p className="text-white my-4 ">* Soyad</p>
            <input
              onChange={passwordChange}
              type="text"
              className="bg-dark w-full border py-2 border-[#49494a]"
            />
          </div>
          <div>
            <p className="text-white my-4 ">* E-Mail Adresi</p>
            <input
              onChange={passwordChange}
              type="text"
              className="bg-dark w-full border py-2 border-[#49494a]"
            />
          </div>
          <div>
            <p className="text-white my-4 ">* Yeni Şifre</p>
            <input
              onChange={passwordChange}
              type="passwords"
              className="bg-dark w-full border py-2 border-[#49494a]"
            />
          </div>
          <div>
            <p className="text-white my-4 ">* Şifre Tekrarı</p>
            <input
              onChange={passwordChange}
              type="text"
              className="bg-dark w-full border py-2 border-[#49494a]"
            />
          </div>
          <div>
            <p className="text-white my-4 ">* Cinsiyet</p>
            <input
              onChange={passwordChange}
              type="text"
              className="bg-dark w-full border py-2 border-[#49494a]"
            />
          </div>
          <div>
            <p className="text-white my-4">* Cep Telefonu</p>
            <div className="flex">
            <input
              onChange={passwordChange}
              type="number"
              className="bg-dark  w-[20%] me-5  border py-2 border-[#49494a]"
            />
            <input
              onChange={passwordChange}
              type="number"
              className="bg-dark w-full border py-2 border-[#49494a]"
            />
            </div>
          </div>

          <button
            onClick={() =>
              mail === password ? setWrong(false) : setWrong(true)
            }
            className="w-full bg-primary mt-8 mb-5 py-2 text-black"
          >
            Kaydol
          </button>

          {/* <p className="border-b border-secondary my-3"></p> */}
          <div className="flex   ">
            <span>
            <input type="checkbox" className="bg-blue-500 w-4"  />
            </span>
            <p className="px-5 text-[16px] text-[#a4a4a5]"><span className="text-white underline">Üyelik Sözleşmesi'ni</span> okudum, kabul ediyorum.</p>
          </div>
          <p className="text-[0.7rem] mb-7">Diğer Üye Seçenekleri</p>
          <button className="border w-full text-[0.7rem] text-left p-2 mb-10">
            FACEBOOK İLE GİRİŞ YAP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
