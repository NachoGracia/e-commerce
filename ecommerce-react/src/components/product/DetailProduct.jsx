import React from "react";
import CartIcon from "../icons/CartIcon";

const DetailProduct = () => {
  return (
    <section className="container mx-auto px-4">
      <p className="mb-3 mt-3 font-bold uppercase tracking-wide text-orange-primary">
        Sneaker Company
      </p>
      <h1 className="mb-4 text-3xl font-bold">Fall Limited Edition Sneakers</h1>
      <p className="mb-4 text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold">
        <span className="text-3xl">125€</span>
        <span className="mr-auto rounded-md bg-pale-orange px-2 py-1  text-orange-primary">
          50%
        </span>
        <span className="items-center text-right text-lg text-grayish-blue line-through">
          250€
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 font-bold">
        <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-100  px-5 py-3 text-xl">
          <button className="text-3xl text-orange-primary">-</button>
          <span className="text-xl">0</span>
          <button className=" text-3xl text-orange-primary">+</button>
        </div>
        <button className=" col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-600">
          <CartIcon fill="#ffff" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default DetailProduct;
