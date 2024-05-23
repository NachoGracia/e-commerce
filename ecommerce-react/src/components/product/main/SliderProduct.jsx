import React, { useEffect, useRef, useState } from "react";

import PrevIcon from "../../icons/PrevIcon";
import NextIcon from "../../icons/NextIcon";

const SliderProduct = ({
  imgs,
  imgsSmall,
  modal = false,
  handleOpenModal = () => {},
  handleCloseModal = null,
  ...props
}) => {
  const [nextImg, setNextImg] = useState(0);
  const btnSlider = useRef(null);

  const handleClickNext = () => {
    nextImg === imgs.length - 1 ? setNextImg(0) : setNextImg(nextImg + 1);
  };

  const handleClickPrev = () => {
    nextImg === 0 ? setNextImg(imgs.length - 1) : setNextImg(nextImg - 1);
  };

  useEffect(() => {
    modal && btnSlider.current.classList.remove("md:hidden");
  }, [modal]);

  return (
    <section {...props}>
      {modal && (
        <button className="text-right md:col-span-4" onClick={handleCloseModal}>
          cerrar
        </button>
      )}
      <div className="relative col-span-4 ">
        <img
          src={imgs[nextImg]}
          alt=""
          className="
        aspect-[1/1] md:cursor-pointer md:rounded-lg  "
          onClick={handleOpenModal}
        />
        <div
          className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-4 md:hidden"
          ref={btnSlider}
        >
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
      {imgsSmall.map((img, i) => (
        <div
          onClick={() => {
            setNextImg(i);
          }}
          key={img}
          className="relative cursor-pointer overflow-hidden rounded-md"
        >
          <img src={img} alt="" className="hidden md:block md:rounded-md" />
          <span className=" absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)]"></span>
        </div>
      ))}
    </section>
  );
};

export default SliderProduct;
