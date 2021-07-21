const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://destination-finder.donovanrowzee.net",
    credentials: true,
  })
);

const mongoURI = process.env.MONGO_URI;

console.log(mongoURI);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log("Error is \n" + error));

app.use("/users", require("./routes/users"));
app.use("/locations", require("./routes/locations"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Serve listening on port ${port}!`));
