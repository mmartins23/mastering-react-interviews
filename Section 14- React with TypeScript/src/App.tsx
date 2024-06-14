import './App.css';
import Greeting from './components/Greeting';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <h3>122. TypeScript Functional Component</h3>
      <Greeting name="John" />
      <hr />
      <h3>123. Interface & Optional Attributes</h3>
      <Products id={1} name="Laptop" description="A high-performance laptop" />
      <Products id={2} name="Smartphone" />
      <hr />
    </div>
  );
}

export default App;
