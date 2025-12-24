import mongoose from "mongoose";
// import bcrypt from "bcrypt";

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
              type: Number,
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

// pre save password before saving to database
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next()
//   } catch (error) {
//     next(error);
//   }
// });

// userSchema.methods.comparePassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// }

const userModel = mongoose.model("UserCollection", userSchema);

export default userModel