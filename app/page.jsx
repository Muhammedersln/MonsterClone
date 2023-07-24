import Image from "next/image";

import Carousel from "../components/Carousel";
import ResponsiveCarousel from "../components/Responsive/ResponsiveCarousel";
import Banner from "../components/Banner";
import UserComment from "../components/UserComment";

export default function Home({ children : any}) {
  return (
    <div className=" max-lg:overflow-hidden ">
      <Carousel autoSlide={true}></Carousel>
      <ResponsiveCarousel autoSlide={true}></ResponsiveCarousel>
      <Banner></Banner>
      <UserComment></UserComment>
    </div>
  );
}
