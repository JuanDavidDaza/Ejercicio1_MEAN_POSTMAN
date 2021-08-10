const Store = require("../models/store");

const registerStore = async (req, res) => {
  if (!req.body.name || !req.body.direccion || !req.body.ciudad)
    return res.status(401).send("Process faild: Incomplete data");

    const existStore= await Store.findOne({name: req.body.name});
    if(existStore) return res.status(401).send("Process faild: Store already exist");
    
    const store = new Store({
        name:req.body.name,
        direccion:req.body.direccion,
        ciudad:req.body.ciudad,
        dbStatus:true,
    });

    const result= await store.save();
    if (!result) return res.status(401).send("Failed to register Store");
    return res.status(200).send({ store });
};

const listStore = async (req, res) => {
    const store=await Store.find()
    if(!store) return res.status(401).send("No Store")
    return res.status(200).send({store})
};

module.exports = { registerStore, listStore };
 


 

