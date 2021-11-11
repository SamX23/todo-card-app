import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

dotenv.config();

const server = express();

server.use(bodyParser.json({ limit: "30mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
server.use(cors());

server.use("/posts", postRoutes);

const CONNECTION_URL = process.env.MONGOOSE;
const PORT = process.env.PORT || 3001;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    server.listen(PORT, () =>
      console.log(`SERVER RUNNING ON : http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));
