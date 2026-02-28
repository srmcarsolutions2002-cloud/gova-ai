import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gova AI Server Running 🚀");
});

app.listen(3000, () => console.log("Server running"));
