const dbConnect = require('./mongodb');

// Promise --> On any heavy operation 
// JS is async language it does not wait for the heavy operation to be completed 
/* when heavy operation takes time then the its result will be pending to handle these results we use promises*/

// dbConnect().then((res)=>{
//   console.log(res.find().toArray().then((data)=>{
//     console.warn(data);
//   }));
// })

const main = async ()=>{
  let data = await dbConnect();

  data = await data.find().toArray();
  console.warn(data);
  console.log("main function called");
}

main();