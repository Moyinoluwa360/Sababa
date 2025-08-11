import { auth, db, googleAuthProvider } from "./firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { store } from "../redux/store";
import { setPostAuthData, clearUser, setError, setLoading } from "../redux/slices/authSlice";
import { getUser } from "./firestore";

// Auth state listener
export const initAuthListener = () => {
  return auth.onAuthStateChanged(async (user) => {
    if (user) {
       const userData = await getUser(user.uid);
      store.dispatch(setPostAuthData(userData));
    } else {
      store.dispatch(clearUser());
    }
  });
};

export const signInWithGoogle = async () => {
  try {
    store.dispatch(setLoading(true));
    const result = await signInWithPopup(auth, googleAuthProvider);
    const user = result.user;

    // Save user to Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email || "",
      displayName: user.displayName || "Anonymous",
      createdAt: new Date().toISOString(),
      photoURL: user.photoURL
    }, { merge: true });

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    store.dispatch(setPostAuthData(userData));
    store.dispatch(setLoading(false));
  } catch (error) {
    store.dispatch(setError(error.message || "Google sign-in failed"));
    store.dispatch(setLoading(false));
  }
};

// createUserWithEmailAndPassword
export const createUserWithEmail = async (email,password,displayName) => {
  try {
    store.dispatch(setLoading(true));
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    // Save user to Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email || "",
      displayName: displayName || "Anonymous",
      createdAt: new Date().toISOString(),
      photoURL: "default_profile_picture_url"
    }, { merge: true });

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: displayName,
      photoURL: user.photoURL,
    };
    store.dispatch(setPostAuthData(userData));
    store.dispatch(setLoading(false));
  } catch (error) {
    store.dispatch(setError(error.message || "Failed to Create Account please validate your credentials and try again"));
    store.dispatch(setLoading(false));
  }
};

// signInWithEmailAndPassword
export const signInWithEmail = async (email, password) => {
  try {
    store.dispatch(setLoading(true));
    const result = await signInWithEmailAndPassword(auth, email, password);
    const userId = result.user.uid;

    // Fetch user data from Firestore
    const userData = await getUser(userId);
    
    store.dispatch(setPostAuthData(userData));
    store.dispatch(setLoading(false));
  } catch (error) {
    store.dispatch(setError(error.message || "Sign in failed"));
    store.dispatch(setLoading(false));
  }
};

export const doSignOut = async () => {
  try {
    await auth.signOut();
    // No need to dispatch clearUser here if your listener handles it
    return true;
  } catch (error) {
    store.dispatch(setError("Sign-out failed"));
    return false;
  }
};
