import { useEffect, useState } from 'react';
import '../styles/pages/TodoPage.css';
import { addTodo, deleteTodo, getTodos, toggleTodo } from '../services/todoService';
import { auth } from '../firebase';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const userId = auth.currentUser?.uid;

  const fetchTodos = async () => {
    if (!userId) return;
    const todos = await getTodos(userId);
    setTodos(todos);
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

  return (
    <div className="todo-page-container">
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
            <button onClick={() => handleDelete(todo.id)} className="delete-button">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
