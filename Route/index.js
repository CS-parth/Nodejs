/*express Js is a framework of nodejs*/
/*APi in 2/3 lines web pages easy css integration finding routes*/
const express = require('express');

const app = express();
// Making of about US page 

app.get("",(req,res)=>{
     
    res.send("Welcome to my server please send request");
})
app.get('/Home',(req,res)=>{
    res.send(`<h1>This is Home Page</h1>
    <a href="/about">Go to About page</a>
    `);
});

app.get('/about',(req,res)=>{
    // res.send("Hello, this is About Page");
    res.send(`
    <input type="text" placeholder="User Name" value="${req.query.name}" />
    <button>Click Me</button>
    `);
});

app.listen(4500,()=>{
    console.log("This server is listning on port 4500");
});

// TO send data(as a request) 
/**
 * localhost5000/about?name="Parth"
*/