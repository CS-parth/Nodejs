const dbConnect = require('./mongodb');

const insert_it = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name: 'parth',branch: 'CSE'},
            {name: 'yash',branch: 'ECE'},
            {name: 'mathur',branch: 'CSE'},
            {name: 'harsh',branch: 'ECE'},
            {name: 'kamal',branch: 'CSE'},
        ]
    );
    console.log(result);
    if(result.acknowledged){
        console.log("data Inserted : ");
    }
}

insert_it();

