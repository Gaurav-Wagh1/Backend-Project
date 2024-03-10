import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// for managing who can make req to server;
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// for limiting the amount of json reaches to the server;
app.use(express.json({ limit: "16kb" }));

// sometimes url include spaces, it will encode those url's;
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// it creates a directory named public in which all those files will be stored which we want to be stored on our server; 
app.use(express.static("public"));

// it allows us to set and get cookies stored in browser;
app.use(cookieParser());


//  Routes import;
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);


export { app };