const Product = require("../models/product");

const registerProduct = async (req, res) => {
  if (!req.body.name || !req.body.precio || !req.body.fecha || !req.body.codigo || !req.body.descripcion)
    return res.status(401).send("Process faild: Incomplete data");

    const existProduct= await Product.findOne({name: req.body.name});
    if(existProduct) return res.status(401).send("Process faild: product already exist");
    
    const product = new Product({
        name:req.body.name,
        precio:req.body.precio,
        codigo:req.body.codigo,
        descripcion:req.body.descripcion,
        fecha:req.body.fecha,
        dbStatus:true,
    });

    const result= await product.save();
    if (!result) return res.status(401).send("Failed to register product");
    return res.status(200).send({ product });
};

const listProduct = async (req, res) => {
    const product=await Product.find()
    if(!product) return res.status(401).send("No product")
    return res.status(200).send({product})
};

module.exports = { registerProduct, listProduct };
 

