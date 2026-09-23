import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import router from "./routes/chat.route.js";
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use("/",router);
app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});
app.listen(port, () => {
  console.log(`chat server started at ${port}`);
  connectdb();
});
