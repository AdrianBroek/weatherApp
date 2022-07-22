import { createContext, useState } from "react";

const StateContext = createContext()

export function StateProvider({children}){
    const [loaded, setLoaded] = useState(false)
    const [current, setCurrent] = useState('')
    const [forecast, setForecast] = useState('')
    const [location, setLocation] = useState('')
    const [city, setCity] = useState()
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const api_key = process.env.REACT_APP_API_KEY
    const [astro, setAstro] = useState('')

    return (
        <StateContext.Provider value={{
            loaded,
            setLoaded,
            current, 
            setCurrent,
            forecast,
            setForecast,
            location,
            setLocation,
            city, 
            setCity, 
            lat, 
            setLat, 
            lon, 
            setLon,
            api_key,
            astro,
            setAstro
        }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContext