import React from "react";

import AddToCart from "./AddToCart";

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
      <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr]">
        <span className="text-3xl">125€</span>
        <span className="mr-auto rounded-md bg-pale-orange px-2 py-1  text-orange-primary">
          50%
        </span>
        <span className="items-center text-right text-lg text-grayish-blue line-through md:col-span-3 md:text-left">
          250€
        </span>
      </div>
      <AddToCart />
    </section>
  );
};

export default DetailProduct;
