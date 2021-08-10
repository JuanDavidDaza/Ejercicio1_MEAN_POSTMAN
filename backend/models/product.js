const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  precio: Number,
  codigo: String,
  descripcion: String,
  fecha: Date,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const product= mongoose.model("product",productSchema);

module.exports=product;

