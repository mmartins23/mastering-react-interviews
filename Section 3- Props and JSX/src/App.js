import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <h2>33. Introduction</h2>
      <UserCard name="Alice" age={25} />
      <UserCard name="Bob" age={30} />
      <UserCard name="Charlie" age={35} />
      <hr/>
    </div>
  );
}

export default App;
