import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim:true,
    required: [true, "name is required"],
  },
  password: {
    type: String,
      required: [true, "name is required"],
    minlength: [6, "password must be at least 6 characters"]
    },
    cartItems: [
        {
            quantity: {
                type: number,
                default: 1
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product"
            }
        }
    ],
    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    }
    
},{
    timestamps: true
});

export const userModel = mongoose.model("UserCollection", userSchema);

export default userModel;