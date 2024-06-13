import './App.css';
import ShowDetails from './components/ShowDetails';
import StatusMessage from './components/StatusMessage';
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
      <h2>53. switch...case…</h2>
      <StatusMessage />
      <hr />
      <h2>54. Logical && Operator</h2>
      <ShowDetails/>
      <hr/>
    </div>
  );
}

export default App;
