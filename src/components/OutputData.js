import React,{useContext, useEffect,useState, useLayoutEffect, useRef} from 'react'
import MapComp from './LeafletMap'
import DayInfo from './DayInfo'
import styled from 'styled-components';
import StateContext from './StateContext';
import Slider from './Slider'
import More from './More';
import {AnimateSharedLayout} from 'framer-motion'


const OutputData = () => {
    const [toggle, setToggle] = useState(false)
    const ref = useRef(null);
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


    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.clientWidth);
        // setHeight(ref.current.offsetHeight);
    }, []);

    const coords = [lon, lat]

    // index nastepnych dni pogody

    // indeks tabelek
    // console.log(activeIndexTable)
    // wszystkie godziny data
    // console.log(totalData)

    const [leftPos, setleftPos] = useState(0)

    useEffect(()=>{
        if (activeindex == 0 ) {
            setleftPos(0);
        }else if(activeindex == 1) {
            setleftPos('-'+width+'px')

        }else {
            setleftPos('-'+width*2+'px')
        }
    }, [activeindex])

    // console.log(leftPos)
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
            </CurrentInfo>
        )}

        {totalData && (
                <MoreSection>
                <h2 onClick={() => setToggle(!toggle)}>More</h2>
                <AnimateSharedLayout>
                    <More className='details' toggle={toggle} setToggle={setToggle}>
                        <div>Chance of rain: {totalData.chance_of_rain} </div>
                        <div>Cloud: {totalData.cloud}% </div>
                        <div>Feels like temp: {totalData.feelslike_c} </div>
                        <div>Gust : {totalData.gust_kph} </div>
                        <div>Humidity : {totalData.humidity} </div>
                        <div>UV : {totalData.uv} </div>
                        <div>Wind direction : {totalData.wind_dir} </div>
                    </More>
                </AnimateSharedLayout>
                <div className='line'></div>
            </MoreSection>
        )}


        <SliderContainer
        className={loaded ? 'active' : ''}
        ref={ref}>
        <div
        style={{left: leftPos, transition: '.35s ease-out'}}
        className='parent'>    
        {loaded && forecast.forecastday.map((item,index)=> (
            <Slider 
            astro={item.astro}
            date={item.date}
            day={item.day}
            hour={item.hour}
            days={forecast.forecastday}
            index={index}
            key={index}
            width={width}
            />
        ))}
        </div> 
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

const MoreSection = styled.section`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 2;
    .details {
        grid-template-columns: repeat(auto-fill, [col-start] 250px [col-end]);
        display: grid;
        align-items: center;
        justify-content: center;
        div {
            padding: 1rem;
        }
    }
    h2 {
        cursor: pointer;
        text-align: center;
        -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
    }
    .line {
        background: #e15d44;
        height: 1px;
        margin: 2rem 0;
        width: 100%;
    }
`

const DayInfoContainer = styled.article`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 32%);
    margin: 2rem 0;
`

const SliderContainer = styled.article`
    display: flex;
    width: 100%;
    height: auto;
    background: #f0f8ff08;
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    overflow: hidden;
    position: relative;
    &.active {
        min-height: 250px;
    }
    .parent {
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
    }
`   


export default OutputData