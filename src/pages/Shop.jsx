import React from "react";
import { category } from "../category";
import { useState } from "react";
import { dummydata } from "../dummydata";
import Product from "../components/Product";
import { FaShopify } from "react-icons/fa6";

const Shop = () => {
  const [cate, setCate] = useState(dummydata);

  const filterProducts = (category) => {
    if (category === "All") {
      setCate(dummydata);
    } else {
      const updateData = dummydata.filter((item) => item.category === category);
      setCate(updateData);
    }
  };
  return (
    <div className="w-full min-h-screen">
      <div className="flex  w-full items-center justify-center mt-2 text-3xl font-bold gap-1">
        <h1>Shop</h1>
        <FaShopify />
      </div>
      <div className="flex items-center justify-center mt-6 gap-4 flex-wrap  mb-5">
        {category.map((item) => {
          return (
            <div
              className="flex flex-col  items-center justify-center gap-1 w-[140px] h-[170px] hover:shadow-lg hover:shadow-black/50 rounded-sm transition-all duration-300 ease-in p-2"
              onClick={() => filterProducts(item.name)}
            >
              <img src={item.image} alt="" className="h-[70%] w-full" />
              <span className="font-semibold">{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className="w-full h-auto flex flex-wrap gap-5 items-center justify-center p-5">
        {cate.map((item) => {
          return (
            <Product
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
