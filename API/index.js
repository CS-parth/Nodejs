const http = require('http');
const data = require('./data'); /**This is API */
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);

// This is a comment trying to make changes in git repo
