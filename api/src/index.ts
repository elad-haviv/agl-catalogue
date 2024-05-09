import express from "express";
import http from "http";
import { json } from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/index";

const app = express();

app.use(
    cors({
        credentials: true,
    })
);

app.use(compression());
app.use(cookieParser());
app.use(json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});

const MONGO_URL = "mongodb://localhost:27017/test";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error) => console.error(error));

app.use("/", router());