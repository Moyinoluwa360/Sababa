import { auth, db, googleAuthProvider } from "./firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { store } from "../redux/store";
import { setPostAuthData, clearUser, setError, setLoading } from "../redux/slices/authSlice";
import { getUser } from "./firestore";
import { clearWishlist } from "../redux/slices/wishlistSlice";

// Auth state listener
export const initAuthListener = () => {
  return auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userData = await getUser(user.uid);
      const safeUserData = userData || {
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || "Anonymous",
        photoURL: user.photoURL || null,
      };
      store.dispatch(setPostAuthData(safeUserData));
    } else {
      store.dispatch(clearUser());
      store.dispatch(clearWishlist());
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
    store.dispatch(setError(error.code.split("/")[1] || "Google sign-in failed"));
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
    store.dispatch(setError(error.code.split("/")[1] || "Failed to Create Account please validate your credentials and try again"));
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

    const safeUserData = userData || {
      uid: result.user.uid,
      email: result.user.email || email,
      displayName: result.user.displayName || "Anonymous",
      photoURL: result.user.photoURL || null,
    };

    store.dispatch(setPostAuthData(safeUserData));
    store.dispatch(setLoading(false));
  } catch (error) {
    store.dispatch(setError(error.code.split("/")[1] || "Sign in failed"));
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
