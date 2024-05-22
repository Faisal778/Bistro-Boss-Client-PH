import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SEctionTitle from "../../components/SectionTitle/SEctionTitle";
import MenuItem from "../shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* main cover  */}
      <Cover image={menuImg} title={"Our Menu"}></Cover>
      <SEctionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SEctionTitle>
      {/* offered menu items  */}
      <MenuCategory items={offered} titel={"offered"}></MenuCategory>
      {/* desserts menu   */}
      <MenuCategory items={desserts} title={"dessert"} image={dessertImg}></MenuCategory>
      {/* pizza menu   */}
      <MenuCategory items={pizza} title={"pizza"} image={pizzaImg}></MenuCategory>
      {/* salad menu   */}
      <MenuCategory items={salad} title={"salad"} image={saladImg}></MenuCategory>
      {/* soup menu   */}
      <MenuCategory items={soup} title={"soup"} image={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
