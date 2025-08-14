import React, { useState } from "react";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import ec from "../assets/emptycart.png";
const Cart = () => {
  // const [checkEmpty, isCheckEmpty] = useState(true);
  const items = useSelector((state) => state.cart);

  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="w-full min-h-auto p-5 ">
      {items.length === 0 ? (
        <div className="w-full h-59.5 flex items-center justify-center flex-col gap-2">
          <h1 className="text-[20px] font-bold">Empty Cart</h1>
          <img src={ec} alt="" className="w-30 h-40 " />
        </div>
      ) : (
        <div>
          {items.map((item) => {
            return (
              <CartCard
                image={item.image}
                title={item.name}
                price={item.price}
                id={item.id}
              />
            );
          })}
          <div className="flex w-full mx-auto h-auto items-center  justify-center mt-5 flex-col text-xl t">
            <div>
              <p className="">
                Total Items :{" "}
                <span className="font-bold pl-3"> {items.length}</span>
              </p>
              <p>
                Total Price:
                <span className="font-bold pl-3">Rs {total}-/</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
