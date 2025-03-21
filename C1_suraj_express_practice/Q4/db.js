const mongoose = require("mongoose");

const connectMongo = () => {
  mongoose
    .connect("mongodb://localhost:27017/ejs_practice")
    .then(() => {
      console.log("MongoDB is connected!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectMongo;
