import React from "react";
import DetailProduct from "@/components/product/detail/DetailProduct";
import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";
import imgSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

import MainImages from "@/components/product/main/MainImages";

const imgs = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
const imgsSmall = [imgSmall1, imgSmall2, imgSmall3, imgSmall4];

const MainProduct = () => {
  return (
    <main className=" grid grid-cols-1 items-center md:mx-auto md:min-h-[calc(100vh-89px)] md:max-w-[80%] md:grid-cols-2">
      <MainImages imgs={imgs} imgsSmall={imgsSmall} />
      <DetailProduct />
    </main>
  );
};

export default MainProduct;
