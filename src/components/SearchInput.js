import React,{useContext, useEffect,useState} from 'react'
import StateContext from './StateContext';
import axios from 'axios'


const SearchInput = () => {

    const [text, setText] = useState()
    const [searchresult, setSearchresult] = useState()

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
        setLoaded
    } = useContext(StateContext)

    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/search.json?key=${api_key}&q=${text}`)
        .then((data)=> {

            setSearchresult(data.data)
            // console.log(searchresult)
        })
        .catch(er => new Error(er))
    },[text])

    const changeTxt = (e) => {
        setText(e.target.value)
        // console.log(text)
    }

    const searchValue = (e) => {
        setCity(e.target.innerText)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setCity(text)
        }
    }

    return (
        <>
            <input onKeyDown={handleKeyDown} onChange={changeTxt} />
            <button onClick={()=> setCity(text)}>Submit</button>
            <div>
                {/* {searchresult && (
                    searchresult.map((item) => {
                        console.log(item.name)
                    })
                )} */}
                 {searchresult && (
                    searchresult.map((item) => (
                        <h5 onClick={(e) => searchValue(e)}>{item.name}</h5>
                    ))
                )}
            </div>
        </>
    )
}

export default SearchInput

