import React,{useEffect,useState} from 'react'
import axios from 'axios'


const GetWeather = () => {
    const api_key = process.env.REACT_APP_API_KEY
    const [data, setData] = useState()
    const [city, setCity] = useState('London')
    const [text, setText] = useState([])
    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`)
        .then(data => {
            // console.log(data.data)
            setData(data.data)
        })
        .catch(er => new Error(er))
    }, [city])


    const inputValue = (e) => {
        setText((txt) => [...txt, e.target.value])

    }

    console.log(data)

    return (
        <>
            <h1>Pogoda </h1>
            {data && (
                <div>
                <h3> Miasto: {data.location.name} </h3>
                <h3> Państwo: {data.location.country} </h3>
                <h3> Temperatura teraz: {data.current.temp_c} </h3>
                <h3> Temperatura : 
                    <img src={data.current.condition.icon}/> 
                </h3>
                </div>
            )}
            <input onChange={inputValue} type="text" />
            <button onClick={()=> setCity(text)}></button>
        </>
    )
}

export default GetWeather