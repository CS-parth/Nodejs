// import {x} from "./app";
// cant import as an old version of JS is in node
// can easily import in react and node
const app = require('./app'); 
console.log("My name is parth");
// .log is a function in a module when run in a terminal and when in web browser it is a function prvided by web browser
// its not of JS 
console.warn("My name is parth");
console.log(app.x);