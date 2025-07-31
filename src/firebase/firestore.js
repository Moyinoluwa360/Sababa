// src/firebase/firestore.js
import { 
  collection, 
  getDoc, 
  updateDoc, 
  doc, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';

// Collections
export const COLLECTIONS = {
  PRODUCTS: 'products',
  ORDERS: 'orders',
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
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
};

export const updateUser = async (userId, updates) => {
  try {
    const docRef = doc(db, COLLECTIONS.USERS, userId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    return { id: userId, ...updates };
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}; 