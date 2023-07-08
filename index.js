require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.path, req.method);
  next();
});
app.use((error, req, res, next) => {
  const numbers = [];
  const alphabets = [];
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    res.status(400).json({
      is_success: false,
      user_id: "aayush_raj_13072002",
      email: "ar4192@srmist.edu.in",
      roll_number: "RA2011027010171",
      numbers,
      alphabets,
    });
  } else {
    next();
  }
});

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

app.post("/bfhl", async (req, res) => {
  let jsonData = req.body.data;
  const numbers = [];
  const alphabets = [];

  jsonData.forEach((element) => {
    if (typeof element === "number") {
      numbers.push(element);
    } else if (typeof element === "string") {
      alphabets.push(element);
    }
  });

  res.json({
    is_success: true,
    user_id: "aayush_raj_13072002",
    email: "ar4192@srmist.edu.in",
    roll_number: "RA2011027010171",
    numbers,
    alphabets,
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server Up and Running");
});
