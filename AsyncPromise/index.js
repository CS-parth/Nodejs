let a = 20;
let b = 0;


let waiting_data = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30)
    }, 2000);
})

waiting_data.then((data)=>{
    console.log(a+data);
})
.catch(()=>{
    console.log("Error");
})
// console.log(a+b);