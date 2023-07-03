const fs = require('fs');
console.log('Wor;d');
fs.writeFileSync("hellow.txt","Parth");
// fs is non global module
// console is a global module as we dont have to import it it there in the bydefault environment
console.log("-->",__dirname);
const fs_ = require('fs').writeFileSync;
fs_("game.txt","parth");