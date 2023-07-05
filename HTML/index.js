const express = require('express');
const path = require('path');
const app = express();
const datapath = path.join(__dirname,'data');
console.log(datapath);

//Below is a static way of inclideing web pages theough nodejs
// app.use(express.static(datapath));
// In static way you have to enter pageinfo with extention lke about.html

app.get('',(req,res)=>{
    res.sendFile(`${datapath}/index.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${datapath}/about.html`)
})
app.get('/home',(req,res)=>{
    res.sendFile(`${datapath}/home.html`)
})
app.get('/home',(req,res)=>{
    res.sendFile(`${datapath}/home.html`)
})
app.get('*',(req,res)=>{
    res.sendFile(`${datapath}/Error.html`);
})

app.listen(4500,()=>{
    console.log("Welcome to my server");
});

// Path module is used to create diff paths
 

