import React,{useEffect,useState, useContext} from 'react'
import axios from 'axios'
import StateContext from './StateContext'


const GetWeather = () => {
    const api_key = process.env.REACT_APP_API_KEY
    const { setData, city } = useContext(StateContext)

    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`)
        .then(data => {
            setData(data.data)
        })
        .catch(er => new Error(er))
        .then((er) => {
            alert(er)
        })
    }, [city])
}

export default GetWeather