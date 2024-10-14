import React,{useState} from "react";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import Menu  from "../assets/icon-menu.svg";
import Close  from "../assets/icon-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleMenu = () =>{
    setIsOpen(!isOpen);
  }
  const Linkclass = {
    
  }
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
            <img src={Cart} className="w-8" alt="" />
            <img src={Avatar} alt="" className="w-8" />
          </div>
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
            <img src={Cart} className="w-8" alt="" />
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
