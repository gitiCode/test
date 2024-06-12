const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world!" });
});

const PORT = process.env.PORT || 1919;
app.listen(PORT, () =>
  console.log(`this app is listening on http://localhost:${PORT}`)
);
