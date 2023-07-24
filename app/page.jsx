import React from "react";
import Carousel from "../components/Carousel";
import ResponsiveCarousel from "../components/Responsive/ResponsiveCarousel";
import Banner from "../components/Banner";


const Home = () => {
  return (
    <div className="max-lg:overflow-hidden">
      <Carousel autoSlide={true} />
      <ResponsiveCarousel autoSlide={true} />
      <Banner />
    </div>
  );
};

export default Home;
