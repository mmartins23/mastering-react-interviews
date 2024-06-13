import React, { useState } from 'react';
import './App.css';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        setUsers(json);
        setError(null); // Clear any previous errors
      })
      .catch(error => setError(error.message));
  };

  return (
    <div className="App">
      <button onClick={fetchUsers}>Get Users</button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
