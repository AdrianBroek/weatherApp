import React,{useContext, useEffect,useState} from 'react'
import StateContext from './StateContext';


const OutputData = () => {
    const [text, setText] = useState([])
    const { data, setData, city, setCity } = useContext(StateContext)

    const inputValue = (e) => {
        setText(e.target.value)
    } 
    console.log(text)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setCity(text)
        }
    }

    console.log(data)
 
    return (
        <>
        <h1>Pogoda </h1>
        {data && (
            <div>
                <h3> City: {data.location.name} </h3>
                <h3> Country: {data.location.country} </h3>
                <h3> Local time: {data.location.localtime} </h3>
                <p> City latitude: {data.location.lat} </p>
                <p> City longtitude: {data.location.lon} </p>
                <h3> Temp in Celcios now: {data.current.temp_c} </h3>
                <h3> Temp feelslike in Celcios now: {data.current.feelslike_c} </h3>
                <h3> Cloud: {data.current.cloud}</h3>
                <h3> Wind: {data.current.wind_kph}</h3>
                <h3> Promienie UV: {data.current.uv}</h3>
                <p><img src={data.current.condition.icon}/>{data.current.condition.text}</p>


            </div>
        )}
        <input onKeyDown={handleKeyDown} onChange={inputValue} type="text" />
        <button onClick={()=> setCity(text)}></button>
    </>
    )
}

export default OutputData