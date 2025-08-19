// src/services/todoService.ts
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const todosRef = collection(db, 'todos');

export const addTodo = async (text: string, userId: string) => {
  return await addDoc(todosRef, {
    text,
    completed: false,
    createdAt: Date.now(),
    userId,
  });
};

export const getTodos = async (userId: string) => {
  const snapshot = await getDocs(todosRef);
  return snapshot.docs
    .filter(doc => doc.data().userId === userId)
    .map(doc => ({
      id: doc.id,
      text: doc.data().text,
      completed: doc.data().completed,
    }));
};

export const deleteTodo = async (id: string) => {
  return await deleteDoc(doc(db, 'todos', id));
};

export const toggleTodo = async (id: string, completed: boolean) => {
  return await updateDoc(doc(db, 'todos', id), { completed });
};
