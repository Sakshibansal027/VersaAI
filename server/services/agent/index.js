import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();
app.get("/", (req, res) => {
  res.json({ message: "hello from agent" });
});
app.listen(port, () => {
  console.log(`agent started at ${port}`);
});
