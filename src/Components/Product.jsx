import React, { useState } from "react";
import Product1 from "../assets/image-product-1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
import Pro1 from "../assets/image-product-1-thumbnail.jpg";
import Pro2 from "../assets/image-product-2-thumbnail.jpg";
import Pro3 from "../assets/image-product-3-thumbnail.jpg";
import Pro4 from "../assets/image-product-4-thumbnail.jpg";
import Minus from "../assets/icon-minus.svg";
import Plus from "../assets/icon-plus.svg";
import Cart from "../assets/icon-cart.svg";
import { IoClose } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Product = ({ handleAddToCart}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(Product1); // Set initial image
  const [selectedImage2, setSelectedImage2] = useState(Product1); // Set initial image
  const [isOpen, setIsOpen] = useState(false);
  const showLightbox = () => {
    setIsOpen(true);
  };

  // Image array with 4 images
  const images = [
    "url('./src/assets/image-product-1.jpg')",
    "url(./src/assets/image-product-2.jpg)",
    "url(./src/assets/image-product-3.jpg)",
    "url(./src/assets/image-product-4.jpg)",
  ];
  // Handle "Next" button click
  const nextSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  // Handle "Previous" button click
  const prevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    count > 0 ? setCount(count - 1) : "";
  };

  const images2 = [Product1, Product2, Product3, Product4]; // Array of image sources

  // Function for going to the next slide
  const nextSlide2 = () => {
    const currentIndex = images2.indexOf(selectedImage2); // Get the current index
    const nextIndex = (currentIndex + 1) % images2.length; // Go to the next image, loop back to start
    setSelectedImage2(images2[nextIndex]); // Set the new image
  };

  // Function for going to the previous slide
  const prevSlide2 = () => {
    const currentIndex = images2.indexOf(selectedImage2); // Get the current index
    const prevIndex = (currentIndex - 1 + images2.length) % images2.length; // Go to the previous image, loop back to end
    setSelectedImage2(images2[prevIndex]); // Set the new image
  };
  // Function to handle thumbnail click
  const handleImageClick = (image) => {
    setSelectedImage(image); // Update the selected image
  };
  const handleImageClick2 = (image) => {
    setSelectedImage2(image); // Update the selected image
  };
  const product = {
    name: " Fall Limited Edition Sneakers",
    price: 125,
    image: Pro1, // Add product image here
  };
  return (
    <>
      <section className="flex md:flex-row flex-col md:gap-20 gap-5 md:py-10 mx-auto  md:w-9/12 ">
        <div className="hidden md:block">
          {/* Main Image */}
          <img
            src={selectedImage}
            alt="Product"
            onClick={showLightbox}
            className="rounded-md  w-full"
          />

          {/* Thumbnails */}
          <div className="flex gap-4 my-4 justify-center">
            <img
              src={Pro1}
              alt="Thumbnail 1"
              className={`w-20 rounded-md cursor-pointer ${
                selectedImage === Product1
                  ? "border-4 border-orange-500 opacity-35"
                  : ""
              }`}
              onClick={() => handleImageClick(Product1)}
            />
            <img
              src={Pro2}
              alt="Thumbnail 2"
              className={`w-20 rounded-md cursor-pointer ${
                selectedImage === Product2
                  ? "border-4 border-orange-500 opacity-35"
                  : ""
              }`}
              onClick={() => handleImageClick(Product2)}
            />
            <img
              src={Pro3}
              alt="Thumbnail 3"
              className={`w-20 rounded-md cursor-pointer ${
                selectedImage === Product3
                  ? "border-4 border-orange-500 opacity-35"
                  : ""
              }`}
              onClick={() => handleImageClick(Product3)}
            />
            <img
              src={Pro4}
              alt="Thumbnail 4"
              className={`w-20 rounded-md cursor-pointer ${
                selectedImage === Product4
                  ? "border-4 border-orange-500 opacity-35"
                  : ""
              }`}
              onClick={() => handleImageClick(Product4)}
            />
          </div>
        </div>
        <div
          className=" md:hidden mt-20  w-full h-96 bg-cover flex justify-between items-center "
          style={{ backgroundImage: images[currentImageIndex] }}
        >
          {/* <img src={Product1} alt="" className="w-full  rounded-md" /> */}
          <FaAngleLeft
            onClick={prevSlide}
            className="bg-white text-4xl p-2 rounded-full cursor-pointer"
          />
          <FaAngleRight
            onClick={nextSlide}
            className="bg-white text-4xl p-2 rounded-full cursor-pointer"
          />
        </div>
        <main className="flex flex-col w-10/12 mx-auto ">
          <div className="flex flex-col">
            <h5 className="md:py-4 uppercase text-sm">sneaker company</h5>
            <h1 className="text-4xl py-2 font-bold">{product.name}</h1>
            <p className="text-sm py-2">
              These low-profile sneakers are your perfect casual wear companion
              Featuring a durable rubber outlet sole, they'll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="flex  flex-row md:flex-col justify-between">
            <div className="flex gap-4">
              <p className="font-bold text-black text-xl">
                $<span>{product.price}</span>.00
              </p>
              <p className="bg-black px-2 h-6 rounded text-white">50%</p>
            </div>
            <p className="pt-2 pb-6 text-sm line-through ">$250</p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2 gap-4 ">
            <div className="flex items-center md:w-24 justify-between bg-gray-200 p-2 rounded-md">
              <img
                onClick={decrease}
                src={Minus}
                alt="icon"
                className="w-3 h-1 cursor-pointer"
              />
              <h1>{count}</h1>
              <img
                onClick={increase}
                src={Plus}
                alt="icon"
                className="w-3 cursor-pointer"
              />
            </div>
            <button
              onClick={() => handleAddToCart(product, count)}
              className="flex justify-center md:gap-4 gap-2 bg-orange-600 py-2 md:mb-0 mb-10 md:px-2 px-10 rounded-md"
            >
              <img src={Cart} alt="icon" />
              Add to cart
            </button>
          </div>
        </main>
      </section>
      <div>
        {/* Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
        )}

        <div
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } items-center w-full absolute top-16 z-20`}
        >
          {/* Close button */}
          <button onClick={() => setIsOpen(false)} className="self-end mr-56">
            <IoClose className=" cursor-pointer text-4xl text-white " />
          </button>

          {/* Lightbox */}
          <div
            className="mt-20 mx-auto w-2/6 h-96 bg-cover flex justify-between items-center relative z-30"
            style={{ backgroundImage: `url(${selectedImage2})` }}
          >
            <FaAngleLeft
              onClick={prevSlide2}
              className="bg-white text-4xl p-2 rounded-full cursor-pointer"
            />
            <FaAngleRight
              onClick={nextSlide2}
              className="bg-white text-4xl p-2 rounded-full cursor-pointer"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 my-4 justify-center relative z-30">
            <img
              src={Pro1}
              alt="Thumbnail 1"
              className={`w-20 rounded-md cursor-pointer ${
                selectedImage2 === Product1
                  ? "border-4 border-orange-500 opacity-75"
                  : ""
              }`}
              onClick={() => handleImageClick2(Product1)}
            />
            <img
              src={Pro2}
              alt="Thumbnail 2"
              className={`w-20 rounded-md cursor-pointer ${
                selectedImage2 === Product2
                  ? "border-4 border-orange-500 opacity-75"
                  : ""
              }`}
              onClick={() => handleImageClick2(Product2)}
            />
            <img
              src={Pro3}
              alt="Thumbnail 3"
              className={`w-20 rounded-md cursor-pointer ${
                selectedImage2 === Product3
                  ? "border-4 border-orange-500 opacity-75"
                  : ""
              }`}
              onClick={() => handleImageClick2(Product3)}
            />
            <img
              src={Pro4}
              alt="Thumbnail 4"
              className={`w-20 rounded-md cursor-pointer ${
                selectedImage2 === Product4
                  ? "border-4 border-orange-500 opacity-75"
                  : ""
              }`}
              onClick={() => handleImageClick2(Product4)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
