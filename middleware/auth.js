const jwt = require("jsonwebtoken");
require("dotenv").config();

//Load User Model
const User = require("../models/User");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  console.log("token+" + token);
  // Check for token
  if (!token) {
    console.log("token check =" + token);
    res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
};
