import React,{useEffect,useState, useContext} from 'react'
import axios from 'axios'
import StateContext from './StateContext'


const GetWeather = () => {

    const { 
        setCurrent,
        setForecast,
        setLocation,
        city, 
        setLat, 
        setLon,
        api_key,
        setAstro,
        setLoaded,
    } = useContext(StateContext)


    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=7&aqi=no&alerts=no`)
        .then(data => {
            setCurrent(data.data.current)
            setLocation(data.data.location)
            setForecast(data.data.forecast)
            setLon(data.data.location.lat)
            setLat(data.data.location.lon)
            setAstro(data.data.data)
            setLoaded(true)
    
        })
        .catch(er => new Error(er))
        .then((er) => {
            // alert(er)
        })
    }, [city])

}

export default GetWeather