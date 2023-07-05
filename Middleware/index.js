// Middlewares are the functions which can be used to modify res and resp
// Like authentication of a user
// blocking a site in a country

const express = require('express');
const app = express();

const reqFilter = (req,res,next)=>{
    console.log('reqFilter');
    if(!req.query.age){
        res.send("please provide age");
    }else if(req.query.age < 18){
        res.send("You can not access this page");
    }else{
        next();
    }
 // We have to use next otherwise The page wont load 
}

app.use(reqFilter);

app.get('*',(req,res)=>{
    res.send('Welcome to my Server');
})

app.listen(4500,()=>{
    console.log("Welcome to my server");
})

