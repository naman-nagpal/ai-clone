import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Connected to mongodb"))
    .catch((err) => {
      console.error("Not able to connect with mongodb");
      console.error(err);
    });
};

export default connectDB;
