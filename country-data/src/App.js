import './App.css';
import Display from './components/Display'
import {useState} from 'react';
import Finder from './components/Finder'

function App() {
  const [results, setResults] = useState(null)
  return (
    <div className="App">
      <Finder  setResults={setResults}/>
      <Display results={results} />
    </div>
  );
}

export default App;
