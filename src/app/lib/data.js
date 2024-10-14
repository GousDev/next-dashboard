import { connectDb } from "./connectDb";
import { Product, User } from "./models";

//Fetching All Users
export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const item_per_page = 2;
  try {
    connectDb();
    const count = await User.countDocuments({ username: { $regex: regex } });
    // console.log(count);
    const users = await User.find({ username: { $regex: regex } })
      .limit(item_per_page)
      .skip(item_per_page * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch users!");
  }
};

//Fetching User by an Id
export const fetchUser = async (id) => {
  try {
    connectDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
  }
};

// Fetching  All Products
export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const item_per_page = 2;

  try {
    connectDb();
    const count = await Product.countDocuments({ title: { $regex: regex } });
    // console.log(count);
    const products = await Product.find({ title: { $regex: regex } })
      .limit(item_per_page)
      .skip(item_per_page * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
  }
};

//Fetching User by an Id
export const fetchProduct = async (id) => {
  try {
    connectDb();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
  }
};
