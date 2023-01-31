import React from "react";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <div className="md:m-8 md:p-8 p-2 m-2">
      <h1 className="text-black text-2xl">Products</h1>
      <div className="cards flex md:flex-row flex-col gap-20">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;
