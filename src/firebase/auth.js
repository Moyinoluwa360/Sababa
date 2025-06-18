import { auth, db, googleAuthProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { store } from "../redux/store";
import { setUser, clearUser, setError, setLoading } from "../redux/slices/authSlice";

// Auth state listener
export const initAuthListener = () => {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };
      store.dispatch(setUser(userData));
    } else {
      console.log("User is signed out", store.getState().auth.user);
      store.dispatch(clearUser());
      console.log("User cleared from store", store.getState().auth.user);
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
      createdAt: new Date(),
    }, { merge: true });

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    store.dispatch(setUser(userData));
    store.dispatch(setLoading(false));
  } catch (error) {
    store.dispatch(setError(error.message || "Google sign-in failed"));
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
