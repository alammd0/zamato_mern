import express from "express";
import connectDb from "./db/db.js";
import cookieParser from "cookie-parser";
// import fileUpload from "express-fileupload";
import cors from "cors";

import userRoute from "./routes/user.route.js";
import foodPostRoute from "./routes/foot.post.route.js"
import foodReelRoute from "./routes/food.rell.route.js"


export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin : "http://localhost:5173",
        credentials : true
    }
));
app.use(cookieParser());
connectDb();

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/food-post", foodPostRoute);
app.use("/api/v1/food-reel", foodReelRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
})