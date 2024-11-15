import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    await listDatabases(client);
  
  } catch (e) {
      console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client){
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


main().catch(console.error);