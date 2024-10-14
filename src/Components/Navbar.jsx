import React, { useState } from "react";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import Menu from "../assets/icon-menu.svg";
import Close from "../assets/icon-close.svg";
import { FaTrash } from "react-icons/fa6";

const Navbar = ({ cart, handleRemoveFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      {/* Desktop View */}
      <header className="text-gray-600 body-font  ">
        <div className="hidden md:flex flex-row justify-between w-11/12 mx-auto p-8 border-b-2 ">
          <nav className=" text-sm">
            <a className="mr-10 font-bold text-2xl">sneakers</a>
            <a className="mr-5 hover:text-gray-900">Collection</a>
            <a className="mr-5 hover:text-gray-900">Men</a>
            <a className="mr-5 hover:text-gray-900">Women</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex gap-10 ">
            <button onClick={handleCart}>
              <img src={Cart} className="w-8" alt="" />
            </button>
            <img src={Avatar} alt="" className="w-8" />
          </div>
        </div>
        {/* Cart Overlay */}
        <div
          className={` bg-white md:w-72 w-11/12 h-auto rounded-md  shadow-md p-4 absolute top-24 md:right-16 right-4 md:top-20  ${
            !isCartOpen ? "hidden" : "flex flex-col"
          }`}
        >
          <h1 className="text-xl border-b-2 pb-4">Cart</h1>
          {cart.length === 0 ? (
            <p className="p-10">Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.name} className="flex justify-between my-6 md:my-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="text-sm">{item.name}</p>
                      <div className="flex gap-2 items-center">
                        <p className="text-sm">
                          ${item.price.toFixed(2)} x {item.amount}
                        </p>
                        <p className="font-bold ">
                          ${(item.price * item.amount).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.name)}
                    className="text-red-500"
                  >
                    <FaTrash className=" text-sm" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <button className="bg-orange-600 text-white py-2 mt-4 w-full">
              Checkout
            </button>
          )}
        </div>
      </header>
      {/* Mobile View */}
      <header className="text-gray-600 body-font fixed w-full top-0 bg-white">
        <div className="md:hidden flex flex-row justify-between w-11/12 h-full  mx-auto py-4 px-2">
          <button onClick={ToggleMenu} className="md:hidden z-50">
            {!isOpen ? (
              <img src={Menu} alt="" className="w-7 cursor-pointer" />
            ) : (
              <img src={Close} alt="" className="w-7 cursor-pointer" />
            )}
          </button>
          <a className="mr-16 font-bold text-2xl">Sneakers</a>
          <div className="flex gap-4">
            <button onClick={handleCart}>
              <img src={Cart} className="w-8" alt="" />
            </button>
            <img src={Avatar} alt="" className="w-8" />
          </div>
        </div>
        <nav
          className={`bg-white overflow-hidden w-1/2 max-h-auto absolute top-0 left-0 flex flex-col px-5 pt-20 pb-40 shadow-2xl ${
            isOpen ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <a
            onClick={ToggleMenu}
            className="my-4 hover:text-gray-900 cursor-pointer"
          >
            Collection
          </a>
          <a
            onClick={ToggleMenu}
            className="mb-4 hover:text-gray-900 cursor-pointer"
          >
            Men
          </a>
          <a
            onClick={ToggleMenu}
            className="mb-4 hover:text-gray-900 cursor-pointer"
          >
            Women
          </a>
          <a onClick={ToggleMenu} className="mb-4 hover:text-gray-900 ">
            About
          </a>
          <a onClick={ToggleMenu} className="mb-80 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
