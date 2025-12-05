import fs from "fs";
import { MongoClient } from "mongodb";

async function main() {
  const uri = 'mongodb+srv://ingmicheljasmin_db_user:Cluster0_Mi_06@cluster0.pviohoc.mongodb.net/?appName=Cluster0';
  
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connecté au cluster MongoDB.");

  const raw = fs.readFileSync("./courses.json", "utf8");
  const docs = JSON.parse(raw);

  for (const d of docs) {
    if (d.date) {
      const dt = new Date(d.date);
      if (!isNaN(dt)) d.date = dt;
    }
  }

  const db = client.db("test");
  const coll = db.collection("courses");

  const result = await coll.insertMany(docs);
  console.log(`Import terminé – documents insérés : ${result.insertedCount}`);

  await client.close();
  console.log("Connexion fermée.");
}

main().catch(console.error);