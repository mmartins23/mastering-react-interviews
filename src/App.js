import './App.css';
import { Counter } from './components/Counter';
import { Counter2 } from './components/Counter2';
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
      <h2>11. Basic Event Handling & Parameter Passing</h2>
      <Counter2/>
      <hr/>
    </div>
  );
}

export default App;
