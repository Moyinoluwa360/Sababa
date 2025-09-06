// src/firebase/firestore.js
import { 
  collection, 
  getDoc, 
  updateDoc, 
  doc, 
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  addDoc
} from 'firebase/firestore';
import { db } from './firebase';

// Collections
export const COLLECTIONS = {
  USERS: 'users'
};

// Products Collection
export const usersCollection = collection(db, COLLECTIONS.USERS);

// User Operations
export const getUser = async (userId) => {
  try {
    const docRef = doc(db, COLLECTIONS.USERS, userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      // Convert updatedAt and createdAt if they exist and are Firestore Timestamps
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : data.createdAt ?? null,
        updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate().toISOString() : data.updatedAt ?? null,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
};

export const getAllOutfits = async () => {
  try {
    const querySnapshot = await getDocs(query(
      collection(db, "outfits"),
      orderBy("createdAt", "desc")));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() , createdAt: doc.data().createdAt.toMillis(),  // number
      updatedAt: doc.data().updatedAt.toMillis(),}));
  } catch (error) {
    console.error('Error getting all outfits:', error);
    throw error;
  }
}

export const updateUser = async (userId, updates) => {
  try {
    const docRef = doc(db, COLLECTIONS.USERS, userId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });

    // Fetch the updated user to get the real updatedAt value
    const updatedSnap = await getDoc(docRef);
    const updatedData = updatedSnap.data();
    // Convert updatedAt and createdAt to string if they exist
    return {
      id: userId,
      ...updatedData,
      createdAt: updatedData.createdAt?.toDate ? updatedData.createdAt.toDate().toISOString() : updatedData.createdAt ?? null,
      updatedAt: updatedData.updatedAt?.toDate ? updatedData.updatedAt.toDate().toISOString() : updatedData.updatedAt ?? null,
    };
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const saveContactMessage = async (formData) => {
  try {
    const contactRef = collection(db, "contactUs");
    await addDoc(contactRef, {
      ...formData,
      createdAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error("Error saving contact message:", error);
    return false;
  }
};