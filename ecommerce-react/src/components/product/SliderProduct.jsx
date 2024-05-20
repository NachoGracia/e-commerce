import React, { useState } from "react";
import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";
import imgSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";
import PrevIcon from "../icons/PrevIcon";
import NextIcon from "../icons/NextIcon";

const imgs = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const SliderProduct = () => {
  const [nextImg, setNextImg] = useState(0);

  const handleClickNext = () => {
    nextImg === imgs.length - 1 ? setNextImg(0) : setNextImg(nextImg + 1);
  };

  const handleClickPrev = () => {
    nextImg === 0 ? setNextImg(imgs.length - 1) : setNextImg(nextImg - 1);
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="relative col-span-4">
        <img
          src={imgs[nextImg]}
          alt=""
          className="
        aspect-[1/1]"
        />
        <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-4">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      <img src={imgSmall1} alt="" className="hidden md:block" />
      <img src={imgSmall2} alt="" className="hidden md:block" />
      <img src={imgSmall3} alt="" className="hidden md:block" />
      <img src={imgSmall4} alt="" className="hidden md:block" />
    </section>
  );
};

export default SliderProduct;
