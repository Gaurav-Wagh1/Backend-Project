import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
});

connectDB();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// })();