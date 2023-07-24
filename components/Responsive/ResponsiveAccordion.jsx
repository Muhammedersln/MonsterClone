"use client";
import React from "react";
import Logo from "../../UI/Logo";
import { IoMdClose } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";
import { RiHomeLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import NavbarData from "../../pages/api/NavbarData";

const ResponsiveNavbar = ({ visible }) => {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(visible);

  const [link, setLink] = useState([
    "0 850 255 11 11",
    "MESAJ GÖNDER",
    "MAĞAZALAR",
    "RANDEVU SİSTEMİ",
    "TEKNİK SERVİS",
    "ÇÖZÜM MERKEZİ",
  ]);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await NavbarData();
        if (result) {
          setCategories(result.data);
        } else {
          console.error("Veri alınamadı");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);
  const handleToggleMenu = () => {
    setMenuOpen(!visible);
  };
  
// slide-in-from-left
  return (
    <div className="sticky-navigation overflow-auto  ">
      <div
        className={`fixed inset-0 overflow-hidden   animate-fade-right  bg-bgicon w-full h-screen hidden  max-lg:inline-block  z-50`}
      >
        <nav className="flex justify-between w-full pl-10 z-50  py-4 items-center border-b border-bordercolor fixed top-0 bg-bgicon">
          <div className="max-lg:w-[180px] ">
            <Logo></Logo>
          </div>
          <div className="flex gap-2">
            <div className="mr-10">
              <button className="text-primary border text-base  border-bordercolor p-1 h-full w-full">
                Harici Ödeme
              </button>
            </div>
          </div>
        </nav>
        <main className="mt-[7rem]">
          <div className="text-white flex  flex-col ab uppercase border-b border-bordercolor ">
            <Link
              href={"/"}
              passHref
              className="flex justify-between px-10 py-4"
            >
              <div className="hover:text-primary duration-200 ease-in  ">
                {categories?.[0]?.name}
                {/* Tüm Laptoplar */}
              </div>{" "}
              <div className="text-lg text-primary">
                <AiOutlineRight></AiOutlineRight>
              </div>
            </Link>
            <Link
              href={"/"}
              passHref
              className="flex justify-between px-10 py-4"
            >
              <div className="hover:text-primary duration-200 ease-in  ">
                {categories?.[0]?.childCategories?.[0]?.name}
                {/* Oyun Bilgisayarları */}
              </div>{" "}
              <div className="text-lg text-primary">
                <AiOutlineRight></AiOutlineRight>
              </div>
            </Link>{" "}
            <Link
              href={"/"}
              passHref
              className="flex justify-between px-10 py-4"
            >
              <div className="hover:text-primary duration-200 ease-in  ">
                {categories?.[1]?.name}
                {/* AKSESUARLAR */}
              </div>{" "}
              <div className="text-lg text-primary">
                <AiOutlineRight></AiOutlineRight>
              </div>
            </Link>{" "}
            <Link
              href={"/"}
              passHref
              className="flex justify-between px-10 py-4"
            >
              <div className="hover:text-primary duration-200 ease-in  ">
                {
                  categories?.[1]?.childCategories?.[0]?.childCategories?.[3]
                    ?.name
                }
                {/* OYUNCU MONİTÖRÜ */}
              </div>{" "}
              <div className="text-lg text-primary">
                <AiOutlineRight></AiOutlineRight>
              </div>
            </Link>{" "}
            <Link
              href={"/"}
              passHref
              className="flex justify-between px-10 py-4"
            >
              <div className="hover:text-primary duration-200 ease-in  ">
                {categories?.[0]?.childCategories?.[2]?.name}
                {/* İŞ BİLGİSAYARLARI */}
              </div>{" "}
              <div className="text-lg text-primary">
                <AiOutlineRight></AiOutlineRight>
              </div>
            </Link>{" "}
            <Link
              href={"/"}
              passHref
              className="flex justify-between px-10 py-4"
            >
              <div className="hover:text-primary duration-200 ease-in  ">
                {categories?.[0]?.childCategories?.[1]?.name}
                {/* İŞ İSTASYONLARI */}
              </div>{" "}
              <div className="text-lg text-primary">
                <AiOutlineRight></AiOutlineRight>
              </div>
            </Link>
            <Link
              href={"/"}
              passHref
              className="flex justify-between border-t-2 border-bordercolor px-10 pt-4 pb-8"
            >
              <div className="hover:text-primary duration-200 ease-in  ">
                CPU & GPU
                {/* CPU & GPU */}
              </div>{" "}
              <div className="text-lg text-primary">
                <AiOutlineRight></AiOutlineRight>
              </div>
            </Link>
          </div>
        </main>
        <div className="mt-5">
          <ul className="flex flex-col text-[#697673] text-[12px] pt-3">
            {link.map((link, index) => {
              const listItemStyle = index === 0 ? { color: "#FBBA29" } : {};
              return (
                <li
                  key={index}
                  className="pl-10 py-4 cursor-pointer"
                  style={listItemStyle}
                >
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
        <footer className="flex text-xs w-full fixed bottom-0 bg-bgicon">
          <div className="w-1/2 border-t text-center border-r border-bordercolor py-4 px-2.5">
            <div className="text-white flex text-xl absolute ml-4">
              <RiHomeLine></RiHomeLine>
            </div>
            <div className="text-white ">ANA SAYFA</div>
          </div>
          <div className="w-1/2 border-t text-center border-bordercolor  py-4 px-2.5">
            <div className="text-white flex text-lg absolute ml-4">
              <FaRegUser></FaRegUser>
            </div>
            <div className="text-white">GİRİŞ YAP</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
