const mongoose = require('mongoose');

const start = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/E-commerce");
}
const ProductsSchema = new mongoose.Schema({
    name: String,
    price: Number
});
const saveINDB = async ()=>{
    // Schema --> files in Db to apply validations 
    // Model --> usese Schema to connect mongodb to nodejs

    const ProductsModel = mongoose.Model('Products',ProductsSchema);
    let data = new ProductsModel({name:"n8",price:1000});
    let result = await data.save();
    console.log(result);
}  
const updateInDB= async ()=>{
    const Product = mongoose.model('products',ProductsSchema);
    let data = await Product.updateOne(
        {name:"n 8"},
        {
            $set:{price:2000, name:'max 8'}
        }
    )
    console.log(data);
}
const deleteINDB = async () =>{
    const Product = mongoose.model('products',ProductsSchema);
    let data = await Product.deleteOne({name: 'max 8'});
    console.log(data);
}

const findINDB = async ()=>{
    const Product = mongoose.model('products',ProductsSchema);
    let data = await Product.find({name:"max 131"});
    console.log(data);
}
start();

saveINDB();

updateInDB();

