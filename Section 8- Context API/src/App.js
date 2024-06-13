import './App.css';
import ComponentA from './components/ComponentA';

function App() {

  const data = "Prop Drilling ...";

  return (
    <div className="App">
      <h2>Prop Drilling Example:</h2>
      <ComponentA  className="container" data={data} />
    </div>
  );
}

export default App;
