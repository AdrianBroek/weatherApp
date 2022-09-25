import React,{useContext, useEffect,useState} from 'react'
import {unstable_batchedUpdates} from 'react-dom'
import StateContext from './StateContext';
import axios from 'axios'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
// style
import styled from 'styled-components';

const SearchInput = () => {

    const [text, setText] = useState('')
    const [searchresult, setSearchresult] = useState()

    const {  
        setCity, 
        api_key,
        active,
        setActive
    } = useContext(StateContext)

    
    useEffect(()=> {
        setSearchresult()
    }, [active])

    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/search.json?key=${api_key}&q=${text}`)
        .then((data)=> {
            setSearchresult(data.data)
        })
        .catch(er => new Error(er))
    },[text])


    // handles input value
    const changeTxt = (e) => {
        setText(e.target.value)
    }

    // change input value to picked city text
    const searchValue = (e) => unstable_batchedUpdates(() => {
        setCity(e.target.innerText)
        setText(e.target.innerText)
        // timeout cause of state bugging 
        // (i tried couple of things from the internet but failed, 
        // so i comed up with this tricky solution, and it kinda works)
        setTimeout(()=>{
            setSearchresult(false)
        },[100])
    })

    // for enter/escape key submitting
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setCity(text)
            setSearchresult(false)
        } else if (e.key === 'Escape') {
            setSearchresult(false)
        }  
    }

    const btnHandler = () => {
        setCity(text)
        setSearchresult(false)
    }

    return (
        <SearchBar onClick={()=> setActive(true)}>
            <input value={text} placeholder='Insert city name' onKeyDown={handleKeyDown} onChange={changeTxt} />
            <button onClick={()=> btnHandler()}>
            <FontAwesomeIcon icon={faSearchLocation} />
            </button>
            <SearchResults>
                 {searchresult && (
                    searchresult.map((item, ind) => (
                        <h5 key={ind} onClick={(e) => searchValue(e)}>{item.name}</h5>
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
    position: relative;
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
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        background-color: transparent;
        height: 100%;
        width: 100%;
        /* &.open {
            background-color: #3a38386e;
        } */
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
            background: #2994D1;
            color: #fff;
        }
    }
`

export default SearchInput

