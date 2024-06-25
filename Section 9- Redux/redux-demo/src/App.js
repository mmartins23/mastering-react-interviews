import Cart from '../components/Cart';
import Purchase from '../components/Purchase';
import Total from '../components/Total';
import './App.css';

function App() {
  return (
    <div className="App">
      <Purchase />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
