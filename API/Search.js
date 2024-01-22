const express = require('express');
require("./config");

const Product = require('./product');

const app = express();

app.use(express.json());

app.get("/search/:key",async (req,res)=>{
    console.log(req.params.key)
    let data = await Product.find(
        {
            "$or": [
                {"name": {$regex: req.params.key}},
                {"brand": {$regex: req.params.key}}
            ] 
        }
    ); 
    res.send("search done");
}) 


app.listen(4500,()=>{
    console.log("Server Started")
});