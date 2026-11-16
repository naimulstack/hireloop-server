import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.json("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});