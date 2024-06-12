import './App.css';
import Events from './components/Events';
import InputEvent from './components/InputEvent';


function App() {
  return (
    <div className="App">
      <h2>Events</h2>
      <Events />
      <hr />
      <h2>Input Event</h2>
      <InputEvent/>
      <hr/>
    </div>
  );
}

export default App;
