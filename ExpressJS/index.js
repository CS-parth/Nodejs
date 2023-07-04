/*express Js is a framework of nodejs*/
/*APi in 2/3 lines web pages easy css integration finding routes*/
const express = require('express');

const app = express();
// Making of about US page 

app.get('/Home',(req,res)=>{
    res.send("Hello, this is Home Page");
});

app.get('/about',(req,res)=>{
    res.send("Hello, this is About Page");
});

app.listen(4500,()=>{
    console.log("This server is listning on port 4500");
});