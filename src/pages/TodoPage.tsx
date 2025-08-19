import { useEffect, useState } from 'react';
import '../styles/pages/TodoPage.css';
import {
  addTodo,
  deleteTodo,
  getTodos,
  toggleTodo,
  toggleTopTask,
  markAsTopTask,
} from '../services/todoService';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  isTopTask?: boolean;
};

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const userId = auth.currentUser?.uid;
  const navigate = useNavigate();

  const fetchTodos = async () => {
    if (!userId) return;
    const userTodos = await getTodos(userId);
    setTodos(userTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, [userId]);

  const handleAddTodo = async () => {
    if (!newTodo.trim() || !userId) return;
    await addTodo(newTodo, userId);
    setNewTodo('');
    fetchTodos();
  };

  const handleToggle = async (id: string, completed: boolean) => {
    await toggleTodo(id, !completed);
    fetchTodos();
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleToggleTopTask = async (todo: Todo) => {
    if (!userId) return;

    try {
      if (!todo.isTopTask) {
        // Check if limit is reached before marking
        await markAsTopTask(todo.id, userId);
      } else {
        // If already top task, unmark it
        await toggleTopTask(todo.id, false);
      }
      fetchTodos();
    } catch (error) {
      alert("Could not update top task. Please try again.");
      console.error("Error toggling top task:", error);
    }
  };

  return (
    <div className="todo-page-container">
      <button className='back-button' onClick={() => navigate('/dashboard')}> ← Back to Dashboard </button>
      <h1 className="todo-title">Your To-Do List</h1>

      <div className="todo-input-row">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-add-button">Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => handleToggle(todo.id, todo.completed)}>{todo.text}</span>
            <button onClick={() => handleToggleTopTask(todo)} className="star-button">
              {todo.isTopTask ? '⭐' : '☆'}
            </button>
            <button onClick={() => handleDelete(todo.id)} className="delete-button">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}