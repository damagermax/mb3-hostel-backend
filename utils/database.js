import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    let connection;

    if (process.env.NODE_ENV == "development") {
      connection = await mongoose.connect(process.env.MONGO_URI);
      console.log(`Connected to db ${connection.connection.host}`);
      return;
    }

    connection = await mongoose.connect(process.env.MONGO_ATLAS_URI);
    console.log(`Connected to db ${connection.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};
