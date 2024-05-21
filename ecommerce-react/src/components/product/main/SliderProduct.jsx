import React, { useState } from "react";

import PrevIcon from "../../icons/PrevIcon";
import NextIcon from "../../icons/NextIcon";

const SliderProduct = ({ imgs, imgsSmall }) => {
  const [nextImg, setNextImg] = useState(0);

  const handleClickNext = () => {
    nextImg === imgs.length - 1 ? setNextImg(0) : setNextImg(nextImg + 1);
  };

  const handleClickPrev = () => {
    nextImg === 0 ? setNextImg(imgs.length - 1) : setNextImg(nextImg - 1);
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="relative col-span-4 ">
        <img
          src={imgs[nextImg]}
          alt=""
          className="
        aspect-[1/1] md:rounded-lg"
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
      {imgsSmall.map((img) => (
        <img
          key={img}
          src={img}
          alt=""
          className="hidden md:block md:rounded-md"
        />
      ))}
    </section>
  );
};

export default SliderProduct;
