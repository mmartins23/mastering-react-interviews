import './App.css';
import ComponentA from './components/ComponentA';
import DataContext from './context/DataContext';

function App() {
  const data = "Prop Drilling ...";
  return (
    <div className="App">
      <h2>Prop Drilling Example:</h2>
      <DataContext.Provider value={data}>
        <ComponentA className="container" />
      </DataContext.Provider>
    </div>
  );
}

export default App;
