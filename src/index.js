import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server started on port :- ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("Mongo db connection failed!", error);
    })

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// })();