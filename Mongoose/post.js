const express = require('express');

require('./config');

const Products = require('./product');

const app = express();

app.use(express.json());

app.post("/create",async (req,res)=>{
    let data = new Products(req.body);
    let result = await data.save();
    console.log(result);
    res.send("Done");
});

app.get('/list',async (req,res)=>{
    let data = await Products.find();
    res.send(data);
})

app.get('/delete/:id',async (req,res)=>{
    console.log(req.params);
    let data = await Products.deleteOne(req.params);
    res.send(data);
})
app.listen(5000,()=>{
    console.log("Server Started");
});