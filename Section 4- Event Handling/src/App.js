import './App.css';
import Events from './components/Events';
import FormMultipleState from './components/FormMultipleState';
import FormMultipleState2 from './components/FormMultipleState2';
import InputEvent from './components/InputEvent';
import PreventDefault from './components/PreventDefault';


function App() {
  return (
    <div className="App">
      <h2>40. Quick Essential Recap - Events</h2>
      <Events />
      <hr />
      <h2>42. Input Event - Textbox</h2>
      <InputEvent />
      <hr />
      <h2>43. preventDefault - Preventing default behavior</h2>
      <PreventDefault />
      <hr />
      <h2>44. Form with Multiple States</h2>
      <FormMultipleState />
      <hr />
      <h2>45. Form States as Object</h2>
      <FormMultipleState2 />
      <hr />
    </div>
  );
}

export default App;
