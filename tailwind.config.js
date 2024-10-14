/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Product1" : "url('/image-product-1.jpg')",
        "Product2" : "url('/image-product-2.jpg')",
        "Product3" : "url('/image-product-3.jpg')",
        "Product4" : "url('/image-product-4.jpg')",
      },
    },
  },
  plugins: [],
};
