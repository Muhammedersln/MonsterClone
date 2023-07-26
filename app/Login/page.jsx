"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
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

  const [link, setLink] = useState(false);

  return (
    <div className="bg-secondary pt-[2rem]">
      <div className=" w-[51rem] text-center  container mx-auto ">
        {wrong && (
          <p className="bg-red-900 ">
            Girmiş olduğunuz cep telefon numarası başka bir üyemiz tarafından
            kullanılmaktadır, lütfen kontrol ediniz.
          </p>
        )}
      </div>
      <div className="  flex   w-full h-full text-white  justify-center contianer  ">
        <div className="flex-col w-[25rem] ">
          <h3 className="text-center m-8 text-[1.7rem]">Hoş Geldiniz</h3>

          <div className="border border-secondary  p-1  ">
            <button className=" hover:text-primary hover:bg-opacity-60 hover:transition-all active:text-primary py-2  bg-dark w-[50%]">
              <Link href={"../Login"}>GİRİŞ YAP </Link>
            </button>

            <button className="hover:text-primary hover:bg-opacity-60   py-2 bg-dark w-[50%] ">
              <Link href={"../Register"}> ÜYE OL</Link>
            </button>
          </div>
          <div>
            <p className="text-white mt-8 py-3">* E-mail</p>
            <input
              onChange={handleChange}
              type="text"
              className="bg-dark w-full border py-2 h-[50px] border-secondary my-element"
            />
          </div>
          <div>
            <p className="text-white mt-8 py-3">* Şifre</p>
            <input
              onChange={passwordChange}
              type="text"
              className="bg-dark w-full border py-2 h-[50px] border-secondary"
            />
          </div>

          <button
            onClick={() =>
              mail === password ? setWrong(false) : setWrong(true)
            }
            className="w-full bg-primary mt-8 mb-5 py-2 text-black"
          >
            GİRİŞ YAP
          </button>
          <div className="flex  justify-between text-sm">
            <Link href="#" className="underline">
              Şifremi Unuttum
            </Link>
            <div className="flex mb-3 ">
              <input type="checkbox" className="me-3  " />
              <p className="underline">Beni Hatırla</p>
            </div>
          </div>
          {/* <p className="border-b border-secondary my-7"></p> */}
          
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
