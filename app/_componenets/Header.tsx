"use client";

import { FaCartShopping } from "react-icons/fa6";
import { useProduct } from "./Context/ProductProvider";
import Link from "next/link";

const Header = () => {
  const { selectProduct } = useProduct();

  return (
    <header className="bg-white shadow-md fixed w-full">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl text-slate-500 font-bold">
          MiniShop
        </a>
        <nav className="flex gap-6">
          <Link href="/" className=" text-black hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="text-black hover:text-blue-600">
            Products
          </Link>
          {selectProduct?.length > 0 ? (
            <Link href="/cart" className=" text-black ">
              <div className="flex ">
                <FaCartShopping
                  size={25}
                  className="animate-pulse text-green-400"
                />
                <p className="mt-1">{selectProduct?.length}</p>
              </div>
            </Link>
          ) : (
            ""
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
