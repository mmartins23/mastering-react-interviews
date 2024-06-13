import { useState } from 'react';
import './App.css';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => { setUsers(json) })
  }

  return (
    <div className="App">
      <button onClick={fetchUsers}>Get Users</button>
      {users.map((user, index) => (
        <User user={user} key={index}/>
      ))}
    </div>
  );
}

export default App;
