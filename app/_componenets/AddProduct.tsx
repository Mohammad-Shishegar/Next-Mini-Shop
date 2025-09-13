"use client";

import { useRouter } from "next/navigation";
import { useProduct } from "./Context/ProductProvider";
import { toast } from "react-toastify";

const AddProduct = ({ item }: any) => {
  const { addProduct, selectProduct } = useProduct();
  const route = useRouter();

  const handleAddProduct = () => {
    if (selectProduct.some((i: any) => i.id === item.id)) {
      toast.success("item already added");
    } else {
      addProduct(item);
      toast.success("item added");
    }
    route.replace("/products");
  };

  return (
    <button
      onClick={() => {
        handleAddProduct();
      }}
      className="w-[150px] cursor-pointer bg-green-500 mt-10 rounded-md hover:bg-green-700"
    >
      Add to Cart
    </button>
  );
};

export default AddProduct;
