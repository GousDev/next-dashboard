import mongoose from "mongoose";
const connection = {};

export const connectDb = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "Dashboard",
    };

    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.Database_Url, DB_OPTIONS);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected successfully");
  } catch (error) {
    console.log("something went wrong", error);
  }
};

// export default connectDb;
