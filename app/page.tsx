"use client";
import { useEffect, useState } from "react";
import {
  createUser,
  DeleteAllUser,
  DeleteOneUser,
  getAllUser,
  getOneUser,
  updateAllUsers,
  updateOneUser,
} from "./actions/userAction";

export default function Home() {
  const [userData, setUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    const user = async () => {
      const oneUser = await getOneUser();
      const allUser = await getAllUser();
      console.log(oneUser);
      console.log(allUser);
    };
    user();
  });

  return (
    <div className="font-sans  flex justify-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <input
        type="text"
        placeholder="email"
        onChange={(e) =>
          setUserData((cv: any) => ({ ...cv, email: e.target.value }))
        }
        className="w-36 border-2 rounded-md border-solid border-slate-500 active:outline-0 px-3 text-black"
      />
      <input
        type="text"
        onChange={(e) =>
          setUserData((cv: any) => ({ ...cv, name: e.target.value }))
        }
        placeholder="name"
        className="w-36 border-2 rounded-md border-solid border-slate-500 active:outline-0 px-3 text-black"
      />
      <button
        className="w-[100px] h-[50px] bg-slate-500 cursor-pointer"
        onClick={ async() => {
          const a = await createUser(userData?.name, userData?.email);
          console.log(a);
        }}
      >
        add user
      </button>
      <button
        className="w-[100px] h-[50px] bg-slate-500 cursor-pointer"
        onClick={ async() => {
          const a = await updateOneUser({email:userData?.email },{name:"1234"});
          console.log(a);
        }}
      >
        update user
      </button>
      <button
        className="w-[100px] h-[50px] bg-slate-500 cursor-pointer"
        onClick={ async() => {
          const a = await updateAllUsers({name:userData?.name },{name:"IRI"});
          console.log(a);
        }}
      >
        update all user
      </button>
      <button
        className="w-[100px] h-[50px] bg-slate-500 cursor-pointer"
        onClick={async () => {
          let a = await DeleteAllUser();
          console.log(a);
        }}
      >
        delete all user
      </button>
      <button
        className="w-[100px] h-[50px] bg-slate-500 cursor-pointer"
        onClick={async () => {
          let a = await DeleteOneUser({name:"ss"});
          console.log(a);
        }}
      >
        delete one user
      </button>
    </div>
  );
}
