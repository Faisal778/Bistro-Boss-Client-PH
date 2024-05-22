import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter (item => item.category === 'offered')
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
