import express from "express";
import connectDb from "./db/db.js";

import userRoute from "./routes/user.route.js";

export const app = express();
app.use(express.json());
connectDb();

app.use("/api/v1/auth", userRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
})

