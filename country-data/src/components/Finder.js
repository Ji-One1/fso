import axios from 'axios'
import { useState } from 'react'

const Finder = ({setResults}) => {
    const [query, setQuery] = useState('')
    
    const handleChange = e => {
        setQuery(e.target.value)
        
        if (e.target.value === ''){
            setResults(null)
            return
        }

        const urlExtension = e.target.value
        const url = `https://restcountries.com/v3.1/name/${urlExtension}`
        
        axios
            .get(url)
            .then(response => setResults(response.data))
            .catch(setResults([]))
    
    }
    const handleSearch = e => {
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSearch}> 
            <div> find countries <input name='input' value={query} onChange={handleChange}/></div>
        </form>

    )
}

export default Finder