 const Filter = ({handleSubmit, filter, setFilter}) => {
  
    const handleFilterChange = e => setFilter(e.target.value)
  
    return(
      <form onSubmit={handleSubmit}>
        <div>Filter shown with: <input value={filter} onChange={handleFilterChange}/></div>
      </form>
    )
  }
  export default Filter