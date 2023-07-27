"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import IconPerson from "../../assets/account_person.svg";
import IconShoping from "../../assets/shopping_cart.svg";
import IconSearch from "../../assets/search.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Category from "./Category";
import ResponsiveAccordion from "../Responsive/ResponsiveAccordion";
import Logo from "../../UI/Logo";

const Navbar = () => {
  const [link, setLink] = useState([
    "0 850 255 11 11",
    "MESAJ GÖNDER",
    "MAĞAZALAR",
    "TEKNİK SERVİS",
    "RANDEVU SİSTEMİ",
    "ÇÖZÜM MERKEZİ",
    "TAMAMLAYICI GARANTİ",
    "ÖMÜR BOYU BAKIM",
  ]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleResize = () => {
    if (window.innerWidth > 960) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [fixedCategories, setFixedCategories] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 117;
      const scrollY = window.scrollY;

      if (scrollY >= navbarHeight) {
        setFixedCategories(true);
      } else {
        setFixedCategories(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className="overflow-hidden navbar 
    "
    >
      {menuOpen && (
        <div className="relative z-50   ">
          <ResponsiveAccordion></ResponsiveAccordion>
          <div className="text-white text-center  bg-bgicon items-center absolute  right-0  top-7 z-50">
            <IoMdClose
              onClick={handleToggleMenu}
              className="text-4xl text-white h-full"
            ></IoMdClose>
          </div>{" "}
        </div>
      )}
      <div className="w-full bg-black ">
        <div className="lg:block hidden">
          <ul className="flex justify-end gap-4 text-yellow mixed text-xs mx-5 pt-3">
            {link.map((link, index) => {
              return (
                <li key={index} className="hover:text-primary">
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-between px-5 py-3 border-b max-lg:flex-wrap border-red-800">
          <div className="max-lg:w-full w-1/3">
            <div className="max-lg:flex max-lg:justify-between">
              <div className="flex gap-3">
                <div className="max-lg:flex items-center hidden">
                  <RxHamburgerMenu
                    className="text-white max-lg:text-2xl cursor-pointer"
                    onClick={handleToggleMenu}
                  ></RxHamburgerMenu>
                </div>
                <div className="max-lg:w-[110px]">
                  <Logo></Logo>
                </div>
              </div>
              <div className="max-lg:flex max-lg:items-center max-lg:text-2xl max-lg:gap-4 hidden">
                <Image src={IconPerson} alt="person"></Image>
                <Image src={IconShoping} alt="shop"></Image>
              </div>
            </div>
          </div>
          <div className="my-auto mx-auto w-1/3 max-lg:w-full max-lg:mt-3 max-lg:order-1">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Arama Yap"
                className="border bg-secondary focus:ring-2 focus:ring-primary focus:outline-none appearance-none  w-[85%] border-light flex-1 max-lg:w-full text-white py-[9px] px-[15px] pr-10 border-1"
              />
              <Image
              alt="search"
                src={IconSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>

          <div className="my-auto w-1/3  flex justify-end max-lg:w-1/2 max-lg:hidden">
            <div className="flex text-sm text-white gap-5 max-lg:justify-end">
              <div className="border-bordercolor border flex items-center p-1  max-xl:p-0 px-5 justify-center">
                <button className="text-primary  max-lg:hidden border-secondary max-xl:p-2 ">
                  Harici Ödeme
                </button>
              </div>
              <div  className="border-bordercolor border ">
                <Link href="../Login" passHref>
                  <div className="flex items-center justify-between max-xl:px-2 p-1 px-5  max-lg:border-none  border-secondary text-white max-lg:hidden">
                    <div className="flex items-center max-xl:justify-center">
                      <div className=" ">
                      <Image
                        src={IconPerson}
                        className=" max-lg:mx-auto "
                        alt="person"
                      ></Image></div>
                      <div className="max-lg:hidden max-lg:p-0 pl-2 max-xl:pl-2">
                        <p className="max-xl:text-[12px] text-sm ">Giriş Yap</p>
                        <p className="text-[#fbbd08] max-xl:text-[10px]  text-xs text-left max-lg:p-0">
                          Kayıt Ol
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="border-bordercolor border max-xl:px-2 p-1 px-5">
                <button className="flex items-center   max-lg:border-none h-full text-white max-lg:hidden">
                  <Image src={IconShoping} className="mr-2" alt="shop"></Image>
                  <p className="max-lg:hidden">Sepetim</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`max-lg:hidden categories ${fixedCategories ? 'fixed bg-black top-0 z-10 w-full': ''}`}>
          <Category></Category>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
