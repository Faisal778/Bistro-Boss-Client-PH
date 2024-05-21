import React from "react";
import Banner from "./Banner/Banner";
import Category from "./category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div className=""> 
      <Banner className="rounded-3xl"></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
