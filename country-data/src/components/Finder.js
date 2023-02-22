const Finder = ({setResults, query, setQuery}) => {

   
    const handleChange = e => {
        setQuery(e.target.value)
    
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