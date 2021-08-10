const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: String,
  direccion: String,
  ciudad: String,
  date: { type: Date, defalul: Date.now },
  dbStatus: Boolean,
});

const store = mongoose.model("store", storeSchema);

module.exports = store;
