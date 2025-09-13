"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext<any>(undefined);

const ProductProvider = ({ children }: any) => {
  const [selectProduct, setSelectProduct] = useState<any>([]);

  const addProduct = (item: any) => {
    if (selectProduct?.some((i: any) => i.id === item.id))
      setSelectProduct((cv: any) =>
        cv?.map((i: any) =>
          i.id === item.id ? { ...i, number: (i?.number ?? 0) + 1 } : i
        )
      );
    else setSelectProduct((cv: any) => [...cv, { ...item, number: 1 }]);
  };

  const deleteProduct = (id: any) => {
    if (selectProduct.find((item: any) => item?.id === id)?.number > 1) {
      setSelectProduct((cv: any) =>
        cv?.map((i: any) => (i.id === id ? { ...i, number: i?.number - 1 } : i))
      );
    } else setSelectProduct((cv: any) => cv.filter((i: any) => i.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ selectProduct, deleteProduct, addProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw Error("use context inside provider!!");
  return context;
};

export { useProduct, ProductProvider };