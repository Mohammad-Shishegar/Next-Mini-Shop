"use client";

import { HiShoppingCart } from "react-icons/hi";
import { RiStarSmileFill } from "react-icons/ri";
import TextOverFlow from "./TextOverFlow";
import { useRouter } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useProduct } from "./Context/ProductProvider";
import { MdOutlineNumbers } from "react-icons/md";
import { useEffect } from "react";

interface IProductItem {
  item: {
    title: string;
    price: number;
    number?: number;
    id: number;
    category: string;
    image: string;
    rating: {
      rate: number;
      number: string;
    };
  };
}

const CartItem = ({ item }: IProductItem) => {
  const { title, price, image, rating, id } = item;
  const { addProduct, deleteProduct, selectProduct } = useProduct();
  const router = useRouter();



  return (
    <div className="w-full shadow-md rounded-2xl flex flex-col items-center p-2">
      <img
        className="h-[200px] w-[80%] bg-no-repeat bg-center bg-cover"
        src={image}
        alt={title}
      />
      <p className="mt-4 text-left text-slate-700 text-[18px] w-full">
        <TextOverFlow text={title} charNum={20} />
      </p>
      <p className="mt-4 flex text-left text-slate-700 text-[18px] w-full">
        <MdOutlineNumbers className="mt-1" />
        {item?.number}
      </p>
      <div className="w-full flex justify-between mt-4 text-slate-700 text-[18px]">
        <span>${price}</span>
        <div className="flex items-center gap-x-2">
          <RiStarSmileFill className="text-yellow-400" size={23} />
          <span>{rating.rate}</span>
        </div>
      </div>
      <button
        className="mt-3 w-full h-[35px] bg-green-700 rounded-md cursor-pointer hover:bg-green-600 group flex justify-center items-center"
        onClick={() => {
          deleteProduct(id);
        }}
      >
        <FaMinus className="animate-pulseScale" size={25} />
      </button>
      <button
        className="mt-3 w-full h-[35px] bg-green-700 rounded-md cursor-pointer hover:bg-green-600 group flex justify-center items-center"
        onClick={() => {
          addProduct(item);
        }}
      >
        <FaPlus className="animate-pulseScale" size={25} />
      </button>
    </div>
  );
};

export default CartItem;
