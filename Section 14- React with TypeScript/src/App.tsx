import './App.css';
import Counter from './components/Counter';
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
      <h3>124. useState() with TypeScript</h3>
      <Counter/>
      <hr/>
    </div>
  );
}

export default App;
