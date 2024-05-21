import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SEctionTitle from "../../../components/SectionTitle/SEctionTitle";
const Category = () => {
  return (
    <section className="rounded-lg border-2 border-green-400">
      <SEctionTitle subHeading={"From 11 am to 10 pm"} heading={"Order Online"}></SEctionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24">
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-2xl uppercase -mt-16 text-center text-white shadow-2xl ">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-2xl uppercase -mt-16 text-center text-white shadow-2xl ">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-2xl uppercase -mt-16 text-center text-white shadow-2xl ">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-2xl uppercase -mt-16 text-center text-white shadow-2xl ">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-2xl uppercase -mt-16 text-center text-white shadow-2xl ">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
