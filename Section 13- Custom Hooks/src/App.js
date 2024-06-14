import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h2>115. Custom Hooks</h2>
      <Component1 />
      <Component2 />
      <Component3 />
      <hr />
      <h2>116. Fetching Data Using Custom Hooks</h2>
      <User />
    </div>
  );
}

export default App;
