// import-to-cluster.js
const fs = require('fs');
const { MongoClient } = require('mongodb');

async function main() {
  // Remplace par ton URI Atlas (ou place-le dans une variable d'environnement)
 // const uri = process.env.MONGODB_URI || "mongodb+srv://ingmicheljasmin_db_user:Cluster0_Mi_06@cluster0.pviohoc.mongodb.net/?appName=Cluster0";
  const uri = 'mongodb+srv://ingmicheljasmin_db_user:Cluster0_Mi_06@cluster0.pviohoc.mongodb.net/?appName=Cluster0';
  // Nom de la base et de la collection
  const dbName = "test";
  const collName = "grades";

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connecté au cluster MongoDB.");

    const db = client.db(dbName);
    const coll = db.collection(collName);

    // Lecture du fichier data.json (même dossier)
    const raw = fs.readFileSync("data.json", "utf8");
    const docs = JSON.parse(raw);

    // Optionnel : convertir les dates ISO strings en objets Date
    // (décommente la boucle si tu veux stocker la date comme Date dans MongoDB)
    for (const d of docs) {
      if (d.date) {
        const dt = new Date(d.date);
        if (!isNaN(dt)) d.date = dt;
      }
    }

    // Insérer (insertMany)
    const result = await coll.insertMany(docs);
    console.log(`Import terminé — documents insérés : ${result.insertedCount}`);
    console.log("IDs insérés :", Object.values(result.insertedIds));
  } catch (err) {
    console.error("Erreur :", err);
  } finally {
    await client.close();
    console.log("Connexion fermée.");
  }
}

main();