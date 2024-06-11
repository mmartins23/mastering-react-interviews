import './App.css';
import { Counter } from './components/Counter';
import { PersonDetails } from './components/PersonDetails';

function App() {
  return (
    <div className="App">
      <h2>3. Component Based Architecture</h2>
      <PersonDetails name="Anne" age={20} />
      <PersonDetails name="Bob" age={22} />
      <PersonDetails name="Charles" age={24} />
      <hr />
      <h2>9. Concept of State & useState() Hook</h2>
      <Counter/>
      <hr/>
    </div>
  );
}

export default App;
