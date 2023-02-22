const Display = ({results}) => {
    if (results === null){
        return
    }
    
    
    if (results.length > 10){
        return (
            <div>Too many matches, please be more specific</div>
        )
    } else if (results.length > 1){
        
        return(
        <div>
            {results.map(result => <div>{result.name.common}</div>)}
        </div>
        )
    } else if (results.length === 1){
        const country = results[0]
        console.log(country);
        return(
            <div>
                <h2>{country.name.common} {country.flag}</h2>
                <div>Capital City: {country.capital}</div>
                <div>Size: {country.area} km </div>

                <h4>Official Languages</h4>
                <ul>
                    {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
                </ul>
                <img src={country.flags.png} alt={country.flags.alt} />

            </div>
        )
    } else{
        return(
            <div>Sorry! No country matches your search!</div>
            )
    }

}

export default Display