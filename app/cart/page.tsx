"use client";

import { useEffect } from "react";
import CartItem from "../_componenets/CartItem";
import { useProduct } from "../_componenets/Context/ProductProvider";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { selectProduct } = useProduct();
  useEffect(() => {
    if (selectProduct?.length === 0) router?.replace("/products");
  }, [selectProduct]);
  
  return (
    <div className="mt-28 grid grid-cols-4 gap-5">
      {selectProduct &&
        selectProduct?.map((item: any, index: any) => (
          <CartItem item={item} key={index} />
        ))}
    </div>
  );
};

export default Page;
