import axios from "axios";
import React from "react";
import Product from "../_componenets/Product";

const page = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  

  return (
    <div className="w-full">
      <Product data={res?.data} />
    </div>
  );
};

export default page;
