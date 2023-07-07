const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; 
const database = 'E-commerce'; 

async function getData() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection('Products');
    const response = await collection.find({}).toArray();
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();  
  }
}

getData();