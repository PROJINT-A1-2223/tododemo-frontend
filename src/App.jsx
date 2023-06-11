import { useState } from 'react';
import './App.css';
import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <h1>Todo demo (optimisée)</h1>
      <p><LoginButton/> <LogoutButton/></p>
      {showForm ? <TodoForm onExit={() => setShowForm(false)}/> : <TodoList onShowForm={() => setShowForm(true)}/>}
    </>
  );
}

export default App;
