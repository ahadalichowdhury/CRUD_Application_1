const express = require("express");
const mongoose = require("mongoose");

const app = express();

var mongoURI;

mongoose.connection.on("open", function (ref) {
  console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
  console.log("Could not connect to mongo server!");
  return console.log(err);
});

mongoURI = "mongodb://localhost/person";

mongoose.connect(mongoURI);

app.use(express.json());
const personRouter = require("./routes/persons");

app.use("/persons", personRouter);

app.listen(9000, () => {
  console.log("server running");
});
