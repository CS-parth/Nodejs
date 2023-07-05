// Its a Template Engine --> To make dynamic pages 
const express = require('express');
const path = require('path');
const app = express();
const datapath = path.join(__dirname,'data');
// const viewpath = apth.join(__dirname,'views');
console.log(datapath);

//Below is a static way of inclideing web pages theough nodejs
// app.use(express.static(datapath));
// In static way you have to enter pageinfo with extention lke about.html

app.set('view engine','ejs');
// is used to set the view engine for your Express application to EJS
app.set('views', 'e:\\Web_Dev\\Nodejs\\EJS\\views');

app.get('',(req,res)=>{
    res.sendFile(`${datapath}/index.html`)
})
app.get('/profile',(req,res)=>{
    const user={
        name: 'parth vijay',
        email: 'example.com',
        city: 'jaipur'
    };
    // res.render('profile',{user});
    res.render('profile', {user});
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
 

