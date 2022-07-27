import React,{useContext, useEffect,useState} from 'react'
import MapComp from './LeafletMap'
import DayInfo from './DayInfo'
import styled from 'styled-components';
import StateContext from './StateContext';
import Slider from './Slider'


const OutputData = () => {
    const [text, setText] = useState([])
    const { 
        setTotalData,
        totalData,
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
        loaded,
        activeindex,
        activeIndexTable,
        setActiveIndexTable
    } = useContext(StateContext)


    const coords = [lon, lat]

    // index nastepnych dni pogody
    console.log(activeindex)
    // indeks tabelek
    // console.log(activeIndexTable)
    // wszystkie godziny data
    // console.log(totalData)

    return (
        <>
        <h1 style={{
            textShadow: '0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)'
        }}>WeatherApp </h1>
        {lat && lon && (
            <MapComp center={coords} zoom={11}/>
        )}


        {loaded && (
            <CurrentInfo>
                <div className='current-data'>
                    <h1><span>City:</span> {location.name} </h1>
                    <h1><span>Country:</span> {location.country} </h1>
                    <h1><span>Local-time:</span> {totalData ? totalData.time : location.localtime} </h1>
                </div>
                <div className='current-weather'>
                    <h1><span>Temperature:</span> {totalData ? totalData.temp_c : current.temp_c} C°</h1>
                    <div className='condition'>
                    <h1><span>Condition:</span> {totalData ? totalData.condition.text : current.condition.text}</h1>
                    <img src={totalData ? totalData.condition.icon : current.condition.icon} />
                    </div>
                </div>
                <More>
                    <h3>More</h3>
                    <div className='line'></div>
                </More>
            </CurrentInfo>
        )}

        <h1>By hour:</h1>
        <SliderContainer>      
        {loaded && forecast.forecastday.map((item,index)=> (
            <Slider 
            astro={item.astro}
            date={item.date}
            day={item.day}
            hour={item.hour}
            days={forecast.forecastday}
            index={index}
            key={index}
            />
        ))}
        </SliderContainer>

        <DayInfoContainer>
        {loaded && forecast.forecastday.map((item,index)=> (
            <DayInfo 
            astro={item.astro}
            date={item.date}
            day={item.day}
            hour={item.hour}
            key={index}
            days={forecast.forecastday}
            index={index}
            />
            ))}
        </DayInfoContainer> 
    </>
    )
}

const CurrentInfo = styled.section`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: flex-start;
    h1 {
        font-size: 2rem;
        margin: 1rem 0;
        span {
            font-size: .95rem;
        }
    }
    .condition {
        display: flex;
        align-items: center;
    }
`

const DayInfoContainer = styled.article`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 32%);
`

const SliderContainer = styled.article`
    display: flex;
    width: 100%;
    height: auto;
    position: relative;
    min-height: 250px;
    background: #f0f8ff08;
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
`   

const More = styled.section`
        grid-column-start: 1;
        grid-column-end: 3;
        h3 {
            text-align: center;
        }
    .line {
        width: 100%;
        height: 2px;
        border-radius: .25rem;
        background-color: RGB(225, 93, 68);

    }
`

export default OutputData