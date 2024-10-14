"use server";

import { connectDb } from "./connectDb";
import { Product, User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Add User
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectDb;
    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();

    if (newUser) {
      console.log("User added Successfully");
    }
  } catch (error) {
    console.log(error);
    // return { success: false, message: "Error adding user" };
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Add Product
export const addProduct = async (formData) => {
  const { title, price, stock, color, category, description } =
    Object.fromEntries(formData);

  try {
    connectDb();
    const newProduct = new Product({
      title,
      price,
      stock,
      color,
      category,
      description,
    });

    await newProduct.save();
    if (newProduct) {
      console.log("Product added successfully");
      // return { success: true, message: "Product added successfully" };
    }
  } catch (error) {
    console.log(error);
    // return { success: false, message: "Error adding product" };
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// Delete Product
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDb();
    const deletedproduct = await Product.findByIdAndDelete(id);
    if (deletedproduct) {
      console.log("Product Deleted successfully");
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error deleting product" };
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// Delete User
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDb();
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      console.log("Product Deleted successfully");
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error deleting User" };
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//Update User
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  // console.log(formData);

  try {
    connectDb();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Update product
export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectDb();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
