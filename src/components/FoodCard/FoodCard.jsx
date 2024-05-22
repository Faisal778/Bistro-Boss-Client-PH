import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="absolute right-0  mr-4 mt-4 px-4 p-2 rounded-lg bg-slate-900 text-white">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
