const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.t5wdb.mongodb.net/destination-finder-users?retryWrites=true&w=majority
`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

app.use("/users", require("./routes/users"));
app.use("/locations", require("./routes/locations"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Serve listening on port ${port}!`));
