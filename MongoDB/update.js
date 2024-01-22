const dbConnect = require("./mongodb")

const update = async ()=>{
    const db = await dbConnect();
    let result = await db.updateOne({name : 'yash'},
    {
        $set:{name: 'akshat'}
    }
    );
    console.log("data updated : ",result);
}

update();