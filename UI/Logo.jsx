import Image from "next/image";
import Link from "next/link";
import lo from "../assets/logo.svg";
const Logo = () => {
  return (
    
      <Link href={"/"}>
      <img
       style={{height:"66px"}}
        className=""
        src="https://www.monsternotebook.com.tr/images/frontend/monster-logo.svg"
        alt=""
      />
      {/* <Image src={lo} alt="logo"  height={"1000px"}></Image> */}
      </Link>
      
    
  );
};

export default Logo;
