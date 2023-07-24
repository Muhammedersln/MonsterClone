
import Carousel from "../components/Carousel";
import ResponsiveCarousel from "../components/Responsive/ResponsiveCarousel";
import Banner from "../components/Banner";
import UserComment from "../components/UserComment";

export default function Home() {
  return (
    <div className=" max-lg:overflow-hidden ">
      <Carousel autoSlide={true}></Carousel>
      <ResponsiveCarousel autoSlide={true}></ResponsiveCarousel>
      <Banner></Banner>
    </div>
  );
}
