const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; 
const database = 'E-commerce'; 
const client = new MongoClient(url);

async function dbConnect(){
    try {
      await client.connect();
      const db = client.db(database);
      return db.collection('Products');
      // const response = await collection.find({}).toArray();
      // console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      // await client.close();  
    }
}

module.exports = dbConnect;