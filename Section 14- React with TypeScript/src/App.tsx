import './App.css';
import ButtonClickExample from './components/ButtonClickExample';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import FocusInput from './components/FocusInput';
import Greeting from './components/Greeting';
import InputHandler from './components/InputHandler';
import MouseClickExample from './components/MouseClickExample';
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
      <h3>125. onClick - Event Handling with TypeScript</h3>
      <MouseClickExample/>
      <ButtonClickExample/>
      <hr/>
      <h3>126. onChange - EventHandling with TypeScript</h3>
      <InputHandler/>
      <hr/>
      <h3>127. select - Working with Dropdown</h3>
      <Dropdown/>
      <hr/>
      <h3>128. useRef() with TypeScript</h3>
      <FocusInput/>
      <hr/>
    </div>
  );
}

export default App;
