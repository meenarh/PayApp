import React from "react";
import image from "../assets/images/image.png";

const ProductCard = () => {
  return (
    <div className="products flex mt-8">
      <div className="product">
        <img src={image} alt="" />
        <h5 className="text-black text-2xl mt-5">Product Name</h5>
        <p className="text-gray-400 text-lg">Product Description</p>
        <p className="text-black text-2xl">Price</p>
        <button className="bg-black text-white mt-5 w-[160px] h-[60px]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
