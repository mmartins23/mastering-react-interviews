import Cart from './components/Cart';
import Purchase from './components/Purchase';
import Total from './components/Total';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <Purchase />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
