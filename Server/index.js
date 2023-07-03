const http = require('http');

function test(a){return a*10;}
const test = (a)=>a*10;

const datacontrol = (req,res)=>{
    res.write(`<h1>I'am using port 4500</h1>`);
    res.end();
}

http.createServer(datacontrol).listen(4500);


// test(a,b){

// }

// test(10,20);