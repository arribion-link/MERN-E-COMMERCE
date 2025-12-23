import mongoose from "mongoose";
import "dotenv/config"
const MONGODB_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error(
    "Error: No MongoDB connection string found. Please set MONGO_URI or MONGODB_URI in your .env file."
  );
  process.exit(1);
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.info("Database connected successfully ✅");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
