import AddProduct from "@/app/_componenets/AddProduct";
import axios from "axios";
import { use } from "react";
import { PiCurrencyDollarDuotone } from "react-icons/pi";
import { RiStarSmileFill } from "react-icons/ri";

const page = ({ params }: any) => {

  async function fetchData(productId: string) {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return response.data;
  }
  const data = use(fetchData(params.productId));

  return (
    <div className="mt-24">
      <div className="w-full grid grid-cols-2 ">
        <div className="w-full">
          <img
            src={data?.image}
            alt={data?.title + data?.id + ""}
            className="w-[350px] h-[400px] bg-center bg-no-repeat bg-cover"
          />
        </div>
        <div className="w-full">
          <p className="text-black text-[25px]">{data?.title}</p>
          <p className="text-black mt-6 flex font-bold text-[20px]">
            <PiCurrencyDollarDuotone
              className="text-green-400 mt-1"
              size={20}
            />
            {data?.price}
          </p>
          <div className="flex items-center gap-x-2 mt-5">
                    <RiStarSmileFill className="text-yellow-400" size={23} />
                    <span className="text-black text-[20px]">4.5</span>
                  </div>
          <p className="mt-3 px-3 text-[18px] text-slate-400">
            {data?.description}
          </p>
         <AddProduct item={data}/>
        </div>
      </div>
    </div>
  );
};

export default page;
