import React, { useEffect, useState } from "react";
import SEctionTitle from "../../../components/SectionTitle/SEctionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
        console.log(popularItems)
      });
  }, []);
  return (
    <section className="mb-12">
      <SEctionTitle subHeading={"Popular Items"} heading={"From Out Menu"}></SEctionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
            menu.map(item => (
                <MenuItem key = {item._id} item = {item}></MenuItem>
            ))
        }
      </div>
    </section>
  );
};

export default PopularMenu;
