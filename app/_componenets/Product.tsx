"use client";

import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

interface product {
  title: string;
  price: number;
  id: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    number: string;
  };
}

interface IProductData {
  data: product[];
}

const Product = ({ data }: IProductData) => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);

  const handeFilter = (e: any) => {
    if (e) {
      const temp = products.filter((item) =>
        item.title.toString().toLowerCase().includes(e.toLowerCase())
      );
      setProducts(temp);
    } else setProducts(data);
  };

  return (
    <div className="mt-24 w-full">
      <div className="w-full flex items-center justify-between ">
        {products ? (
          <>
            <p className="text-black text-[20px]">Products</p>
            <input
              onChange={(e) => handeFilter(e.target.value)}
              className=" rounded-md w-[150px] h-7 px-2 border-[2px] text-black border-slate-400 border-solid"
            />
          </>
        ) : (
          ""
        )}
      </div>
      <div className="mt-5 grid grid-cols-4 gap-5">
        {products?.map((item: any, index: number) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
