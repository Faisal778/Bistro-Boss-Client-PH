import React, { useEffect, useState } from "react";
import SEctionTitle from "../../../components/SectionTitle/SEctionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  //   const [menu, setMenu] = useState([]);

  //   useEffect(() => {
  //     fetch("menu.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const popularItems = data.filter((item) => item.category === "popular");
  //         setMenu(popularItems);
  //         console.log(popularItems)
  //       });
  //   }, []);
  return (
    <section className="mb-12">
      <SEctionTitle subHeading={"Popular Items"} heading={"From Out Menu"}></SEctionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))
          // menu.map(item => (
          //     <MenuItem key = {item._id} item = {item}></MenuItem>
          // ))
        }
      </div>
      <div className="text-center">
      <button className="btn btn-outline border-0 border-b-4 mt-8">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
