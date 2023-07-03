// Sync programming language --> if one task is not completed then the next will not be started 
// Async prog lang --> It won't wait for one task to be completed for the other to be loaded (imorves speed)
// PHP is a sync language
let a = 10;
let b = 0;

console.log("Start execution");

setTimeout(()=>{
    console.log("exe......");
    b = 20; 
},2000);

console.log("exe.......");
console.log(a+b);

