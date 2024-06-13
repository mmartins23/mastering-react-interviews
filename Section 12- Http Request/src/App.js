import './App.css';

function App() {

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  return (
    <div className="App">
      <button onClick={fetchUsers}>Get Users</button>
    </div>
  );
}

export default App;
