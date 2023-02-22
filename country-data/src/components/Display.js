import axios from 'axios'
import { useEffect, useState } from 'react'

const Display = ({results, setQuery, query}) => {

    const [weather, setWeather] = useState('')
    const getCityWeather = city => {
        const key = process.env.REACT_APP_API_KEY
        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${key}&q=${city}`;
    
        return axios
            .get(base + query)
            .then(response => {
                const base = `http://dataservice.accuweather.com/currentconditions/v1/${response.data[0].Key}`
                const query = `?apikey=${key}`
                return axios
                        .get(base + query)
                        .then(response => response.data[0])
            
            })}
    
    useEffect(() => {
        if (results.length === 1){
            getCityWeather(results[0].capital)
                .then(response => setWeather(response))
            
        }
    }, [results])

    console.log(weather);

    if (results.length > 10){
        return (
            <div>Too many matches, please be more specific</div>
        )
    } else if (results.length > 1){
        const handleClick = (e) => {
            e.preventDefault()
            setQuery(e.target.name)
        }
        return(
        <div>
            {results.map(result => <form key={result.name.common} onClick={handleClick}>{result.name.common} <button name={result.name.common}>Show</button></form>)}
        </div>
        )
    } else if (results.length === 1){
        const country = results[0]
        
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

                <h4>Weather in {country.capital}</h4>
                {weather && <div>It is {weather.Temperature.Metric.Value} Celcius</div>}
                {weather && <div>Weather is {weather.WeatherText}</div>}


            </div>
        )
    } else if (query.length !== 0){
        return(
            <div>Sorry! No country matches your search!</div>
            )
    } else{
        return
    }

}

export default Display

