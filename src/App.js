import './App.css';
import { PersonDetails } from './components/PersonDetails';

function App() {
  return (
    <div className="App">
      <PersonDetails name="Anne" age={20} />
      <PersonDetails name="Bob" age={22} />
      <PersonDetails name="Charles" age={24} />
    </div>
  );
}

export default App;
