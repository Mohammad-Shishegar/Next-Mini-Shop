// app/actions/userActions.js
"use server";

import { connectToDatabase } from "@/app/_componenets/_lib/mongoDb";
import { User } from "@/app/_componenets/_lib/mongoModel/user";

const createUser = async (name: string, email: string) => {
  await connectToDatabase();
  //   const userDoc = await User.create({ name, email });
  const userDoc = await User.insertOne({ name, email });
  // const a = await User.insertOne({name:"akbar" ,email:"akbari@gmail.com"})
  // the diffrence between create and insert is munber of data that we want to add to data base
  // if one by one its better to use to create and if we have many data for set in data base
  // that better to use insert
  const user = JSON.parse(JSON.stringify(userDoc));
  return user;
};

const changeData = (data: any): object => {
  return JSON.parse(JSON.stringify(data));
};

const getOneUser = async () => {
  try {
    await connectToDatabase();
    const userDoc = await User.findOne({ email: "aa@gmail.com" });
    const user = changeData(userDoc);
    return user;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("An error occurred");
  }
};

const getAllUser = async () => {
  try {
    await connectToDatabase();
    const userDoc = await User.find();
    const user = changeData(userDoc);
    return user;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("An error occurred");
  }
};

const DeleteAllUser = async () => {
  try {
    await connectToDatabase();
    const userDoc = await User.deleteMany();
    const user = changeData(userDoc);
    return user;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("An error occurred");
  }
};

const DeleteOneUser = async (filter: object) => {
  try {
    await connectToDatabase();
    const userDoc = await User.deleteOne(filter);
    const user = changeData(userDoc);
    return user;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("An error occurred");
  }
};

const updateOneUser = async (filter: object, data: object) => {
  try {
    await connectToDatabase();
    const userDoc = await User.findOneAndUpdate(filter, data, { new: true });
    const user = changeData(userDoc);
    return user;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("An error occurred");
  }
};

const updateAllUsers = async (filter: object, data: object) => {
  try {
    await connectToDatabase();
    const userDoc = await User.updateMany(filter, data);
    const user = changeData(userDoc);
    return user;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("An error occurred");
  }
};

export {
  getOneUser,
  createUser,
  getAllUser,
  DeleteAllUser,
  DeleteOneUser,
  updateOneUser,
  updateAllUsers,
};
