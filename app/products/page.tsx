import axios from "axios";
import React from "react";

const page = async ({ products }: any) => {
  const res = await axios.get("https://fakestoreapi.com/products");
  console.log(res);

  return (
    <div className="mt-24 h-[1500px] w-[500px] bg-red-400">
      <button
        onClick={() => {
          console.log("first");
        }}
      >
        next
      </button>
    </div>
  );
};

export default page;
