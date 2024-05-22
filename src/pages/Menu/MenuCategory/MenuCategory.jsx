import React from "react";
import MenuItem from "../../shared/MenuItem/MenuItem";
import Cover from "../../shared/cover/Cover";

const MenuCategory = ({ items, title, image }) => {
  return (
    <div className="pt-8">
      {title && <Cover image={image} title={title}></Cover>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
