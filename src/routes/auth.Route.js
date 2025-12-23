import express from "express";
const authRoute = express.Router();
// controllers
import {
    register,
    signin,
    logout
} from "../controllers/auth.Controller.js";

// routes
authRoute
  .post("/register", register)
  .post("/signin", signin)
  .post("/logout", logout);

export default authRoute;