import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import image13 from "../assets/image18.jpg";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../redux/cartSlice";
import toast from "react-hot-toast";
const CartCard = ({ image, title, price, id }) => {
  console.log(title);

  const dispatch = useDispatch();
  return (
    <div className="w-[90%]   flex flex-col gap-1 h-auto py-5 md:h-[160px] md:flex-row items-center justify-around mx-auto shadow-[0_0_5px_black]  mt-5 rounded-md">
      {/* Left div */}
      <div className="w-[50%] h-[80%]  flex flex-col md:flex-row  justify-center  items-center   ">
        <img src={image} alt="" className="w-30 h-[100%] object-contain" />
        <div className="flex flex-col items-start p-4  ">
          <span className="text-[16px]">{title}</span>
          <span className="font-semibold">Rs {price}-/</span>
        </div>
      </div>
      {/* Right div */}
      <div className="flex items-center justify-center   ">
        <button
          className="px-3 py-1 bg-red-700 rounded-full   text-white hover:bg-red-600/75 transition-all duration-300 ease-in flex gap-1 items-center justify-center cursor-pointer"
          onClick={() => {
            dispatch(RemoveItem(id));
            toast.error("Product removed");
          }}
        >
          <span>Remove</span>
          <RiDeleteBin6Fill />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
