import express from "express";
import connectDb from "./db/db.js";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js";
import foodPostRoute from "./routes/foot.post.route.js"
import foodReelRoute from "./routes/food.rell.route.js"


export const app = express();
app.use(express.json());
app.use(cookieParser());
connectDb();

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/food-post", foodPostRoute);
app.use("/api/v1/food-reel", foodReelRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
})

