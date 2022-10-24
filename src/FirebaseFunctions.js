import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

const getCollection = async (collectionName = 'Courses') => {
    const coursesCollection = collection(db, `${collectionName}`)
    const data = await getDocs(coursesCollection);
    return data.docs.map((doc) => ({ ...doc.data() }));
}

export {getCollection}