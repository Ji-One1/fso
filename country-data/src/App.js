import './App.css';
import Display from './components/Display'
import {useState, useEffect} from 'react';
import Finder from './components/Finder'
import axios from 'axios'

function App() {
  const [results, setResults] = useState(null)
  const [query, setQuery] = useState('')

  const handleDisplayInfo = query => {
    if (query === ''){
        setResults(null)
        return
    }

    const urlExtension = query
    const url = `https://restcountries.com/v3.1/name/${urlExtension}`
    
    axios
        .get(url)
        .then(response => setResults(response.data))
        .catch(setResults([]))

    
} 
  useEffect(() => handleDisplayInfo(query), [query])

  return (
    <div className="App">
      <Finder  setResults={setResults} query={query} setQuery={setQuery}/>
      <Display results={results} setQuery={setQuery}/>
    </div>
  );
}

export default App;
