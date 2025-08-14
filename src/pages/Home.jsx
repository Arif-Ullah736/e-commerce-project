import React, { useState } from "react";
import Nav from "../components/Nav";
import bg from "../assets/bg0.gif";
import { category } from "../category";
import Product from "../components/Product";
import { dummydata } from "../dummydata";
const Home = () => {
  const [cate, setCate] = useState(dummydata);

  const filterProducts = (category) => {
    const updateData = dummydata.filter((item) => item.category === category);
    setCate(updateData);
  };
  return (
    <div className="w-full h-auto  ">
      <div className="w-full h-70 flex items-center justify-center pt-4 ">
        <img
          src={bg}
          alt=""
          className="w-90% h-full rounded-md shadow-md shadow-black/50 "
        />
      </div>

      <div className="flex items-center justify-center mt-6 gap-4 flex-wrap  mb-5">
        {category.slice(0, 5).map((item) => {
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
      <h1 className="text-center text-2xl font-bold p-5">Trending Products</h1>

      <div className="w-full h-auto flex flex-wrap gap-5 items-center justify-center p-5">
        {cate.slice(0, 7).map((item) => {
          return (
            <Product
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
