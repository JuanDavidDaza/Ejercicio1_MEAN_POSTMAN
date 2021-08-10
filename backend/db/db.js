const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CONNECTION, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection DB with Mongo ON");
  } catch (e) {
    console.log("Error Connection: ", e);
    throw new Error("Error connecting to MongoDB");
  }
};

module.exports = { dbConnection };
