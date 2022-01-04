
import './App.css';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
    <div className="App">
  <h1>Convert</h1>
  <CurrencyRow />
  <div className='equal'>=</div>
  <CurrencyRow />
    </div>
  );
}

export default App;
