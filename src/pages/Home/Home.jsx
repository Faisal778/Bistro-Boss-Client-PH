import React from "react";
import Banner from "./Banner/Banner";
import Category from "./category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className=""> 
      <Banner className="rounded-3xl"></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured> </Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
