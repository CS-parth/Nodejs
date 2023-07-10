const dbConnect = require('./mongodb');

const deletedata = async ()=>{
    const db = await dbConnect();
    const result = await db.deleteOne({
        name: 'akshat'
    })
    console.log(result);
}           

deletedata();