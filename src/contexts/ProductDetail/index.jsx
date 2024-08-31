import { createContext, useContext, useState } from "react";

import { ContextGlobalConsumer } from "@context/Global";

const AppContext = createContext();

export const ContextDetailProductProvider = (props) => {
  const [isAddedProduct, setAddedProduct] = useState(false);
  const { HandleAddProductCart } = ContextGlobalConsumer();

  const HandAddVerifyProductCart = (i, d) => {
    HandleAddProductCart(i, d);
    setAddedProduct(true);
  };

  const HandVerifyProductCart = (i) => {
    setAddedProduct(i);
  };

  const value = {
    isAddedProduct,
    HandAddVerifyProductCart,
    HandVerifyProductCart,
  };
  return <AppContext.Provider value={value} {...props} />;
};

export const ContextDetailProductConsumer = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "ContextConsumer debe estar dentro de proveedor AppContext"
    );
  }
  return context;
};
