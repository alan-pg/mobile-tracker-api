require("dotenv").config();
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const config = {
  uri: process.env.MONGO_URI,
  options: {
    useNewUrlParser: true,
  },
};

mongoose.connection.on("open", () => {
  console.log("Successfully connected to database.");
});

mongoose.connection.on("error", (err) => {
  console.log("error", err);
});

mongoose.connect(config.uri, config.options);

