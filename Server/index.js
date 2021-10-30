import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const server = express();

server.use("/posts", postRoutes);

server.use(express.json({ limit: "30mb", extended: true }));
server.use(express.urlencoded({ limit: "30mb", extended: true }));
server.use(cors);

// MONGODB ATLAS
const CONNECTION_URL = "";
const PORT = process.env.PORT || 3000;

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     server.listen(PORT, () => console.log("SERVER RUNNING ON : ", PORT))
//   )
//   .catch((err) => console.log(err));

// mongoose.set("useFindAndModify", false);

server.listen(PORT, () => console.log("SERVER RUNNING ON : ", PORT));
