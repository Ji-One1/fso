import './App.css';
import Display from './components/Display'
import {useState, useEffect} from 'react';
import Finder from './components/Finder'
import axios from 'axios'

function App() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')

  const handleDisplayInfo = query => {
    if (query === ''){
        setResults([])
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
      <Display results={results} setQuery={setQuery} query={query}/>
    </div>
  );
}

export default App;
