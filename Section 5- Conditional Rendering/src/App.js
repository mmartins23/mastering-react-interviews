import './App.css';
import UserGreeting from './components/UserGreeting';
import UserGreeting2 from './components/UserGreeting2';

function App() {
  return (
    <div className="App">
      <h2>50. Conditional Rendering with if...else…</h2>
      <UserGreeting2 />
      <hr />
      <h2>51. Ternary Operator</h2>
      <UserGreeting />
      <hr />
    </div>
  );
}

export default App;
