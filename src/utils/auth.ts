import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

// 🆕 Register function that also sets displayName and creates a Firestore user doc
export const register = async (email: string, password: string, displayName: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Set Firebase Auth profile
  await updateProfile(user, {
    displayName,
  });

  // Save user profile in Firestore
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    displayName,
    createdAt: new Date(),
  });

  return user;
};

// ✅ Your existing login function stays the same
export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// ✅ Your existing logout function stays the same
export const logout = async (navigate: (path: string) => void) => {
  await signOut(auth);
  navigate('/');
};