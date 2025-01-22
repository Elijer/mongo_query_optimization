import { MongoClient } from 'mongodb';
import { faker } from '@faker-js/faker';

const departments = [
  'Sales', 'Csuite', 'Engineering', 'Dragontaming', 'Concessions',
  'Trip-guides', 'Accounting', 'Production', 'Writing', 'Advertising'
] as const;


const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
] as const;

type Department = typeof departments[number];
type State = typeof states[number];


interface Member {
  id: string
  tenureMonths: number
  region: string
  department: string
}

interface Plan {
  id: string
  minimumTenureMonths: number
  allowedRegions: State[]
  allowedDepartments: Department[]
}

const randomTenureRange = 50
const randomRegionRange = 50

function getDiscreteTenure(){
  return Math.floor(Math.random() * randomTenureRange)
}

function createRandomMember(): Member {
  return {
    id: crypto.randomUUID(),
    tenureMonths: getDiscreteTenure(),
    region: faker.helpers.arrayElement(states),
    department: faker.helpers.arrayElement(departments) //  returns ONE random element from an array
  }
}

function createRandomPlan(): Plan {
  return {
    id: crypto.randomUUID(),
    minimumTenureMonths: getDiscreteTenure(),
    allowedRegions: Array.from({ length: Math.floor(Math.random() * randomRegionRange) }, () => faker.helpers.arrayElement(states)),
    allowedDepartments: Array.from({ length: Math.floor(Math.random() * randomRegionRange) }, () => faker.helpers.arrayElement(departments))
  }
}

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    await listDatabases(client);

    const db = client.db("clasp");
    const membersCollection = db.collection("members");
    const plansCollection = db.collection("plans");

    // Add the people!
    const memberInsert = Array.from({length: 4000000}, createRandomMember)
    const result = await membersCollection.insertMany(memberInsert);
    console.log(result)

    // Add the plans
    const planInsert = Array.from({length: 4000}, createRandomPlan)o
    const result2 = await plansCollection.insertMany(planInsert);
    console.log(result2)
  
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