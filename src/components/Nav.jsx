import React from "react";
import { FaShopify } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const items = useSelector((state) => state.cart);
  console.log(items);

  return (
    <nav className="w-full h-auto shadow-md shadow-black/50 ">
      {/*  NavBar Part 1 */}
      <div className="w-full bg-black p-5  flex items-center justify-between">
        <NavLink to={"/"}>
          <div className="flex items-center gap-1 text-white text-[20px]">
            <span>V-SHOP </span>
            <FaShopify />
          </div>
        </NavLink>

        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search for items..."
            className="outline-0 border-1 rounded-full pl-3 bg-white w-130 p-1"
          />
          <IoSearchOutline
            size={20}
            className="absolute right-4 top-2 text-gray-500 "
          />
        </div>

        <NavLink to={"/cart"}>
          <div className="text-white relative">
            <FiShoppingCart size={30} />
            <span className="absolute -top-3.5 -right-0.5">{items.length}</span>
          </div>
        </NavLink>
      </div>

      {/*  NavBar Part 2 */}
      <div className="flex items-center justify-center bg-gray-800 p-1 w-full h-auto">
        <ul className="flex items-center justify-center text-white gap-5">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/shop"}>
            <li>Shop</li>
          </NavLink>
          <NavLink to={"/cart"}>
            <li>Cart</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
