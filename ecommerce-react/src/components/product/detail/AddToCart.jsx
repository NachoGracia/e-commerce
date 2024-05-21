import React, { useState } from "react";
import CartIcon from "../../icons/CartIcon";

const AddToCart = () => {
  const [items, setItems] = useState(0);

  const handleRestItem = () => {
    items === 0 ? null : setItems(items - 1);
  };

  return (
    <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_2fr] ">
      <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-100  px-5 py-3 text-xl md:col-span-1">
        <button
          className="text-3xl text-orange-primary"
          onClick={handleRestItem}
        >
          -
        </button>
        <span className="text-xl">{items}</span>
        <button
          className=" text-3xl text-orange-primary"
          onClick={() => setItems(items + 1)}
        >
          +
        </button>
      </div>
      <button className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-600 md:col-span-1">
        <CartIcon fill="#ffff" />
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCart;
