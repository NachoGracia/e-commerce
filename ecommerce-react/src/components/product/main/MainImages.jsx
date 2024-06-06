import React, { useState } from "react";
import SliderProduct from "./SliderProduct";

const MainImages = ({ imgs, imgsSmall }) => {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    window.innerWidth > 767 && setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <>
      <SliderProduct
        imgs={imgs}
        imgsSmall={imgsSmall}
        className="grid md:grid-cols-4 md:gap-4 "
        handleOpenModal={handleOpenModal}
      />
      {modal && (
        <>
          <SliderProduct
            modal={modal}
            imgs={imgs}
            imgsSmall={imgsSmall}
            className="z-10 hidden md:absolute  md:bottom-1/2 md:right-1/2 md:grid  md:max-w-lg md:translate-x-1/2 md:translate-y-1/2 md:grid-cols-4 md:gap-4"
            handleCloseModal={handleCloseModal}
          />

          <span className="fixed left-0 top-0 h-full w-full bg-black/70 backdrop-blur-sm"></span>
        </>
      )}
    </>
  );
};

export default MainImages;
