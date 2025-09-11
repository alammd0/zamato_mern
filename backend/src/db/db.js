
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.MONGODB_URL);

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log(err);
    }
}


export default connectDb;