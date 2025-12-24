import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      user,
      message: "User created successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong while registering the user",
    });
  }
};

export const signin = async (req, res) => {
  try {
    res.send("sing in controller");
  } catch (error) {}
};

export const logout = async (req, res) => {
  try {
    res.send("logout controller");
  } catch (error) {}
};

export default {
  register,
  signin,
  logout,
};
