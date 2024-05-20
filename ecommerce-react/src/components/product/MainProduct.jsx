import React from "react";
import DetailProduct from "@/components/product/DetailProduct";
import SliderProduct from "./SliderProduct";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <SliderProduct />
      <DetailProduct />
    </main>
  );
};

export default MainProduct;
