import './App.css';
import { Counter } from './components/Counter';
import { Counter2 } from './components/Counter2';
import { VisibilityToggle } from './components/VisibilityToggle';
import { PersonDetails } from './components/PersonDetails';
import { TextInput } from './components/TextInput';
import DigitalClock from './components/DigitalClock';
import ExampleComponent from './components/ExampleComponent';
import TimerComponent from './components/TimerComponent';
import FocusInput from './components/FocusInput ';
import Counter3 from './components/Counter3';

function App() {
  return (
    <div className="App">
      <h2>3. Component Based Architecture</h2>
      <PersonDetails name="Anne" age={20} />
      <PersonDetails name="Bob" age={22} />
      <PersonDetails name="Charles" age={24} />
      <hr />
      <h2>9. Concept of State & useState() Hook</h2>
      <Counter />
      <hr />
      <h2>11. Basic Event Handling & Parameter Passing</h2>
      <Counter2 />
      <hr />
      <h2>15. Primitive Types with useState()</h2>
      <VisibilityToggle />
      <TextInput />
      <hr />
      <h2>19. useEffect() - Creating A Digital Clock Using useEffect()</h2>
      <DigitalClock />
      <hr />
      <h2>20. useEffect() Multiple States & Skipping Effects For Optimization</h2>
      <ExampleComponent />
      <hr />
      <h2>21. Cleaning Up An Effect</h2>
      <TimerComponent />
      <hr />
      <h2>24. useRef() hook</h2>
      <FocusInput />
      <hr />
      <h2>25. React.memo() & useCallback() hook</h2>
      <Counter3/>
      <hr/>
    </div>
  );
}

export default App;
