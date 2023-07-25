import React from "react";
import Carousel from "../components/Carousel";
import ResponsiveCarousel from "../components/Responsive/ResponsiveCarousel";
import Banner from "../components/Banner";
import UserComment from "../components/UserComment";

const Home = () => {
  return (
    <div className="max-lg:overflow-hidden">
      <Carousel autoSlide={true} />
      <ResponsiveCarousel autoSlide={true} />
      <Banner />
      <UserComment></UserComment>
    </div>
  );
};

export default Home;
