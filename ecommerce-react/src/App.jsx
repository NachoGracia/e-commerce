import React from "react";

import MainHeader from "./components/header/MainHeader";
import MainProduct from "./components/product/ModelProduct";
import { CartDetailsProvider } from "@/context/useCartDetails";

const App = () => {
  return (
    <>
      <CartDetailsProvider>
        <MainHeader />
        <MainProduct />
      </CartDetailsProvider>
    </>
  );
};

export default App;
