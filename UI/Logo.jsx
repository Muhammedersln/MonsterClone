import Image from "next/image";
import Link from "next/link";
import lo from "../assets/logo.svg";
const Logo = () => {
  return (
    <Link href={"/"} aria-label="Anasayfaya git">
      <img
        style={{ height: "66px" }}
        className=""
        src="https://www.monsternotebook.com.tr/images/frontend/monster-logo.svg"
        alt="Monster Notebook Logo"
      />
    </Link>
  );
};

export default Logo;
