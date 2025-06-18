import admin from "firebase-admin";
import serviceAccount from "../firebase/serviceAccountKey.json" assert { type: "json" };

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// 1. Add Store (Manual Onboarding)
export const addStore = async (storeData) => {
  try {
    const storeRef = await db.collection('stores').add({
      ...storeData,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log("✅ Store added with ID:", storeRef.id);
    return storeRef.id;
  } catch (err) {
    console.error("❌ Failed to add store:", err.message);
    return null;
  }
};

// 2. List All Stores (Quick Check)
export const listStores = async () => {
  const snapshot = await db.collection('stores').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Example Usage
const demoStore = {
  name: "Luxe Threads",
  status: "active",
  commissionRate: 15,
  contactEmail: "partner@luxe.com",
  webhooksConfigured: false,
  installedAt: new Date(),
  productsLastSynced: null,
};

// When onboarding a new partner:
// await addStore(demoStore);

// To check current partners:
// const stores = await listStores();
// console.log(stores);