import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover image={menuImg} title={"Our Menu"}></Cover>
      
      
    </div>
  );
};

export default Menu;
