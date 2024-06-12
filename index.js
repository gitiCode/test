const express = require("express");
const app = express();
require("dotenv").config();
require("mongoose").connect('').then(()=>console.log("is connected to DB")).catch(()=>console.log("not connected to DB"))

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world!" });
});

// const PORT = process.env.PORT || 1919;
const {NODE_MODE, PORT} = process.env
app.listen(PORT, () =>
  console.log(`this app is on ${NODE_MODE} Mode \nhttp://localhost:${PORT}`)
);
