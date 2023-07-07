// Middlewares are the functions which can be used to modify res and resp
// Like authentication of a user
// blocking a site in a country

const express = require('express');
const reqFilter = require('./middleware'); 

const app = express();
const route = express.Router();

// app.use(reqFilter);

route.use(reqFilter);
app.get('*',(req,res)=>{
    res.send('Welcome to my Server');
})
app.get('/about',reqFilter,(req,res)=>{ // As same way can be applied on the other 
    res.send('Welcome to my About Page');
})
route.get('/home',(req,res)=>{
    res.send('Welcome to my Home Page');
})

app.use('/',route);
app.listen(4500,()=>{
    console.log("Welcome to my server");
})

// Application level middle ware -- apply to all routes