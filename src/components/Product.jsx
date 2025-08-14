import React from "react";
import { AddItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Product = ({ name, image, price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-50 h-80 rounded-sm flex flex-col flex-wrap justify-between  items-center p-1 gap-2 shadow-lg shadow-black/50">
      <img src={image} alt="" className="w-full h-[55%] " />
      <div className="flex flex-col items-start p-4  ">
        <span className="text-[13px]">{name}</span>
        <span className="font-semibold">RS {price}/-</span>
        <button
          className="px-5 py-0.5 bg-black rounded   text-white hover:bg-gray-900/75 transition-all duration-300 ease-in"
          onClick={() => {
            dispatch(
              AddItem({
                id: id,
                name: name,
                price: price,
                image: image,
              })
            );
            toast.success("Product  added  ");
          }}
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default Product;
