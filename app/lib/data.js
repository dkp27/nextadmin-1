import { Product, User } from "./models";
import { connectTodb } from "./utils";

export const fetchUsers = async (q,page) => {

    const regex = new RegExp(q,"i");

    const ITEM_PER_PAGE = 8;

  try {
    await connectTodb(); 
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({username: { $regex : regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
    return {count,users};
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};
export const fetchUser = async (id) => {

  try {
    await connectTodb(); 
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchProducts = async (q,page) => {

    const regex = new RegExp(q,"i");
    const ITEM_PER_PAGE = 8;

  try {
    await connectTodb(); 
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({title: { $regex : regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
    return {count,products};
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch products!");
  }
};
export const fetchProduct = async (id) => {
  try {
    await connectTodb();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch product!");
  }
};
