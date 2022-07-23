import React,{useContext, useEffect,useState} from 'react'
import MapComp from './LeafletMap'

import StateContext from './StateContext';


const OutputData = () => {
    const [text, setText] = useState([])
    const { 
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
        setAstro,
        loaded  
    } = useContext(StateContext)
    const coords = [lon, lat]
    return (
        <>
        <h1>Pogoda </h1>
        {loaded && (
            <div>
                <h3> City: {location.name} </h3>
                <h3> Country: {location.country} </h3>
                <h3> Local time: {location.localtime} </h3>
                <p> City latitude: {lat} </p>
                <p> City longtitude: {lon} </p>
                <h3> Temp in Celcios now: {current.temp_c} </h3>
                <h3> Temp feelslike in Celcios now: {current.feelslike_c} </h3>
                <h3> Cloud: {current.cloud}</h3>
                <h3> Wind: {current.wind_kph}</h3>
                <h3> Promienie UV: {current.uv}</h3>
                <p><img src={current.condition.icon}/>{current.condition.text}</p>
            
            </div>
        )}
        <MapComp center={coords} zoom={10}/>
    </>
    )
}

export default OutputData