import React,{useContext, useEffect,useState} from 'react'
import StateContext from './StateContext';
import axios from 'axios'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
// style
import styled from 'styled-components';

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

    }
    // console.log(text)

    const searchValue = (e) => {
        setCity(e.target.innerText)
        setSearchresult(false)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setCity(text)
            setSearchresult(false)
        }
        // else {
        //     console.log(e.key)
        // }
        
    }

    const btnHandler = () => {
        setCity(text)
        setSearchresult(false)
    }

    return (
        <SearchBar>
            <input value={city ? city : text} placeholder='Insert city name' onKeyDown={handleKeyDown} onChange={changeTxt} />
            <button onClick={()=> btnHandler()}>
            <FontAwesomeIcon icon={faSearchLocation} />
            </button>
            <SearchResults>
                 {searchresult && (
                    searchresult.map((item) => (
                        <h5 onClick={(e) => searchValue(e)}>{item.name}</h5>
                    ))
                )}
            </SearchResults>
        </SearchBar>
    )
}

const SearchBar = styled.section`
    display: flex;
    height: 50px;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: -1px 5px 6px rgba(0,0,0, .3);
    input {
        width: 100%;
        border: 0;
        border-radius: 0.5rem;
        padding: .5rem;
    }
    button {
        position: absolute;
        right: 0;
        width: 80px;
        height: 100%;
        border: 0;
        background-color: transparent;
        padding: 0;
        cursor: pointer;

        &:hover {
            background-color: transparent;
        }
        svg {
            width: 100%;
            height: 50%;
        }
    }
`

const SearchResults = styled.div`
    position: absolute;
    top: 85%;
    background: white;
    color: black;
    width: 100%;
    box-shadow: -1px 5px 6px rgba(255,255,255, .15);
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    left: 0;
    z-index: 10;
    overflow: hidden;
    h5 {
        margin: 0;
        padding: .5rem;
        font-weight: 400;
        cursor: pointer;
        &:hover {
            background: RGB(225, 93, 68);
            color: #fff;
        }
    }
`

export default SearchInput

