// src/firebase/firestore.js
import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  updateDoc, 
  doc, 
  query, 
  where, 
  orderBy,
  limit,
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
export const productsCollection = collection(db, COLLECTIONS.PRODUCTS);
export const ordersCollection = collection(db, COLLECTIONS.ORDERS);
export const usersCollection = collection(db, COLLECTIONS.USERS);

// Product Operations
export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsCollection, {
      ...productData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      status: 'active'
    });
    return { id: docRef.id, ...productData };
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const getProducts = async (filters = {}) => {
  try {
    let q = productsCollection;
    
    if (filters.platform) {
      q = query(q, where('platform', '==', filters.platform));
    }
    if (filters.category) {
      q = query(q, where('category', '==', filters.category));
    }
    if (filters.status) {
      q = query(q, where('status', '==', filters.status));
    }
    
    q = query(q, orderBy('createdAt', 'desc'));
    
    const snapshot = await getDocs(q);
    let products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Apply text search filter if provided
    if (filters.searchQuery) {
      const searchTerm = filters.searchQuery.toLowerCase();
      products = products.filter(product => 
        product.title?.toLowerCase().includes(searchTerm) ||
        product.description?.toLowerCase().includes(searchTerm)
      );
    }

    return products;
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

export const getProduct = async (productId) => {
  try {
    const docRef = doc(db, COLLECTIONS.PRODUCTS, productId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    console.error('Error getting product:', error);
    throw error;
  }
};

export const updateProduct = async (productId, updates) => {
  try {
    const docRef = doc(db, COLLECTIONS.PRODUCTS, productId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    return { id: productId, ...updates };
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Order Operations
export const addOrder = async (orderData) => {
  try {
    const docRef = await addDoc(ordersCollection, {
      ...orderData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      orderStatus: 'pending'
    });
    return { id: docRef.id, ...orderData };
  } catch (error) {
    console.error('Error adding order:', error);
    throw error;
  }
};

export const getOrders = async (filters = {}) => {
  try {
    let q = ordersCollection;
    
    if (filters.userId) {
      q = query(q, where('userId', '==', filters.userId));
    }
    if (filters.orderStatus) {
      q = query(q, where('orderStatus', '==', filters.orderStatus));
    }
    if (filters.paymentStatus) {
      q = query(q, where('paymentStatus', '==', filters.paymentStatus));
    }
    
    q = query(q, orderBy('createdAt', 'desc'));
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting orders:', error);
    throw error;
  }
};

export const getOrder = async (orderId) => {
  try {
    const docRef = doc(db, COLLECTIONS.ORDERS, orderId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Order not found');
    }
  } catch (error) {
    console.error('Error getting order:', error);
    throw error;
  }
};

export const updateOrder = async (orderId, updates) => {
  try {
    const docRef = doc(db, COLLECTIONS.ORDERS, orderId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    return { id: orderId, ...updates };
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

// User Operations
export const addUser = async (userData) => {
  try {
    const docRef = await addDoc(usersCollection, {
      ...userData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { id: docRef.id, ...userData };
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

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