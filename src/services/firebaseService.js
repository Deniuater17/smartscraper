import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig";

const db = getFirestore(firebaseApp);

// Obtener documentos de una colección específica
export const fetchProductsFromCollection = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(`Productos obtenidos desde la colección "${collectionName}":`, products);
        return products;
    } catch (error) {
        console.error(`Error al obtener documentos de la colección "${collectionName}":`, error);
        throw error;
    }
};



