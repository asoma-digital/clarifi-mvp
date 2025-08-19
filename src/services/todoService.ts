import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
  limit,
} from 'firebase/firestore';
import { db } from '../firebase';

const todosRef = collection(db, 'todos');

// Add a new todo
export const addTodo = async (text: string, userId: string) => {
  return await addDoc(todosRef, {
    text,
    completed: false,
    isTopTask: false, // ← added
    createdAt: Date.now(),
    userId,
  });
};

// Get todos for the current user
export const getTodos = async (userId: string) => {
  const snapshot = await getDocs(todosRef);
  return snapshot.docs
    .filter((doc) => doc.data().userId === userId)
    .map((doc) => ({
      id: doc.id,
      text: doc.data().text,
      completed: doc.data().completed,
      isTopTask: doc.data().isTopTask || false, // ← handle missing field
    }));
};

// Delete a todo
export const deleteTodo = async (id: string) => {
  return await deleteDoc(doc(db, 'todos', id));
};

// Toggle complete/incomplete
export const toggleTodo = async (id: string, completed: boolean) => {
  return await updateDoc(doc(db, 'todos', id), { completed });
};

// Mark a todo as a Top Task (only if under 3 already)
export const markAsTopTask = async (taskId: string, userId: string) => {
  const topTasksSnapshot = await getDocs(
    query(todosRef, where('userId', '==', userId), where('isTopTask', '==', true))
  );

  if (topTasksSnapshot.size >= 3) {
    alert('You can only have 3 top tasks at a time.');
    return;
  }

  await updateDoc(doc(db, 'todos', taskId), { isTopTask: true });
};

// Get Top 3 tasks
export const getTopTasksQuery = (userId: string) =>
  query(todosRef, where('userId', '==', userId), where('isTopTask', '==', true), limit(3));

// Toggle a task’s top task status
export const toggleTopTask = async (taskId: string, newStatus: boolean) => {
  const taskRef = doc(db, 'todos', taskId); // ← corrected from 'tasks'
  await updateDoc(taskRef, {
    isTopTask: newStatus,
  });
};