import './App.css';
import Card from './components/Card';
import List from './components/List';
import UserCard from './components/UserCard';
import UserInfo from './components/UserInfo';


function App() {
  const user = {
    name: "Alice",
    age: 25,
    location: "Wonderland"
  };

  return (
    <div className="App">
      <h2>33. Introduction</h2>
      <UserCard name="Alice" age={25} />
      <UserCard name="Bob" age={30} />
      <UserCard name="Charlie" age={35} />
      <hr />
      <h2>36. Spread Operator</h2>
      <UserInfo {...user} />
      <hr />
      <h2>37. props.children property</h2>
      <Card>
        <h2>Hello</h2>
        <p>This is a card component</p>
      </Card>
      <hr />
      <h2>38. ReactFragment</h2>
      <List/>
      <hr/>
    </div>
  );
}

export default App;




