// CURD --> Create Update Read Delete
const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname);
const filepath = `${dirpath}/Vijay.txt`;

fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item);
})
// node needs some memory 
//updating the file 
fs.appendFile(filepath,'and file name is Vijay.txt',(err)=>{
    if(!err) console.log("file is updated");
});