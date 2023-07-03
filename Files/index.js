const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname);
console.warn(dirpath);
// for(i=0;i<5;i++){
//     fs.writeFileSync(`Vijay${i}.txt`,"a simple text file");
// }

fs.readdir(dirpath,(err,files)=>{
    files.forEach((items)=>{
        console.log(items);
    })
})
/*It is not possible to access the files which are present in other drivers 
*/