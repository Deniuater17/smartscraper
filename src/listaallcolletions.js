import admin from "firebase-admin";


// Inicializa el SDK de Firebase Admin
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const db = admin.firestore();

async function listAllCollections() {
  try {
    const collections = await db.listCollections();
    const collectionNames = collections.map((collection) => collection.id);

    // Opcional: Guarda las colecciones en Firestore
    await db.collection("metadata").doc("collections").set(
      collectionNames.reduce((acc, name) => {
        acc[name] = true;
        return acc;
      }, {})
    );

    console.log("Colecciones listadas:", collectionNames);
  } catch (error) {
    console.error("Error al listar colecciones:", error);
  }
}

listAllCollections();