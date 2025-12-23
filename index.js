import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import connectDB from "./src/config/db.js";


const app = express()
const port = process.env.PORT;
if (!port) {
    console.log("error fetching connection port!!");
    process.exit(1);
}

// middlewares
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
import authRoute from "./src/routes/auth.Route.js";

app.get("/", (req, res) => {
    res.send("application running succefully!");
});

app.use("/auth", authRoute);

const initApp = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`http://localhost:${port}`);
        })
    } catch (error) {
        throw new error("error initializing the application!!!")
    }
}

initApp();