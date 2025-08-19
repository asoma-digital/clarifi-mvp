import { useEffect, useState } from 'react';
import { getDocs, query, where, limit, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import '../styles/components/TopThreeTasks.css';

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TopThreeTasks() {
  const [topTasks, setTopTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        const q = query(
          collection(db, 'todos'),
          where('userId', '==', user.uid),
          where('isTopTask', '==', true),
          limit(3)
        );

        const snapshot = await getDocs(q);
        const tasks = snapshot.docs.map(doc => ({
          id: doc.id,
          text: doc.data().text,
          completed: doc.data().completed,
        }));

        setTopTasks(tasks);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p className="top-tasks-loading">Loading top tasks...</p>;

  return (
    <div className="top-tasks-card">
      <h2 className="top-tasks-title">Top 3 Tasks</h2>
      <ul className="top-tasks-list">
        {topTasks.length === 0 ? (
          <li className="empty-message">No top tasks set yet!</li>
        ) : (
          topTasks.map(task => (
            <li key={task.id} className={`top-task-item ${task.completed ? 'completed' : ''}`}>
              {task.text}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}