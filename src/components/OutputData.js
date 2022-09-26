import React,{useContext, useEffect,useState, useLayoutEffect, useRef} from 'react'
import MapComp from './LeafletMap'
import DayInfo from './DayInfo'
import styled from 'styled-components';
import StateContext from './StateContext';
import Slider from './Slider'
import More from './More';
import {AnimateSharedLayout, motion} from 'framer-motion'
// icons
import rain from '../images/icons/cloudy.png'
import wind from '../images/icons/wind.png'
import thermometer from '../images/icons/thermometer.png'
import tornado from '../images/icons/tornado.png'
import uv from '../images/icons/uv.png'
import humidity from '../images/icons/humidityy.png'
import cloud from '../images/icons/cloud.png'
import arrow from '../images/icons/down-arrow.png'
// animations
import {arrowRotate} from '../animation'


const OutputData = () => {
    const [toggle, setToggle] = useState(false)
    const ref = useRef(null);
    const { 
        totalData,
        current, 
        forecast,
        location, 
        lat, 
        lon, 
        loaded,
        activeindex
    } = useContext(StateContext)
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.clientWidth);
    }, []);

    window.addEventListener('resize', () => {
        setWidth(ref.current.clientWidth);
    })

    const coords = [lon, lat]

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

    return (
        <>
        <h1 style={{
            marginTop: '.5rem',
            textShadow: '0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)'
        }}>WeatherApp<span style={{display: 'block',fontSize: '10px'}}>   API from: <a href="https://www.weatherapi.com/">weatherapi.com</a></span></h1>
      
        {/* map */}
        {lat && lon && (
            <MapComp center={coords} zoom={11}/>
        )}

        {/* pick day */}
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

        {/* now date */}
        {loaded && (
            <CurrentInfo>
                <div className='current-data'>
                    <h1><span>City:</span> {location.name} </h1>
                    <h1><span>Country:</span> {location.country} </h1>
                    <h1><span>Time:</span> {totalData ? totalData.time.substring(11) : location.localtime.substring(11)} </h1>
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

        {/* hour slider */}
        <HourSlider>
        <SliderContainer
        className={loaded ? 'active' : ''}
        ref={ref}>
        <div
        style={{left: leftPos, transition: '.3s ease-in'}}
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
        {loaded && (
            <>
            <div className="line fourth" style={{height: 200}}></div>
            <div className="line third" style={{height: 150}}></div>
            <div className="line second" style={{height: 100}}></div>
            <div className="line first" style={{height: 50}}></div>        
            </>
        )}
        
        </HourSlider>

        {/* more section */}
        {totalData && (
                <MoreSection>
                <motion.h2
                    onClick={() => setToggle(!toggle)}
                    whileTap={{scale: .9}}
                >
                More
                </motion.h2>

                {/* arrow */}
                <motion.div
                    variants={arrowRotate}
                    initial="off"
                    animate={toggle ? 'on' : 'off'}
                    className="arrowContainer">
                            <motion.img className='fst' src={arrow}/>
                            <img className={toggle ? 'sec off' : 'sec'} src={arrow}/>
                            <img className={toggle ? 'th off' : 'th'} src={arrow}/>
                </motion.div>
                <AnimateSharedLayout>
                    <More className='details' toggle={toggle} setToggle={setToggle}>
                        <div className="detail">
                            <p>Chance of rain: {totalData.chance_of_rain}</p>
                            <div className="iconContainer">
                                <img src={rain} />
                            </div>
                        </div>
                        <div className="detail">
                            <p>Cloud: {totalData.cloud}%</p>
                            <div className="iconContainer">
                                <img src={cloud} />
                            </div>
                        </div>
                        <div className="detail">
                            <p>Feels like temp: {totalData.feelslike_c}</p> 
                            <div className="iconContainer">
                                <img src={thermometer} />
                            </div>
                        </div>
                        <div className="detail">
                            <p>Gust : {totalData.gust_kph}</p> 
                            <div className="iconContainer">
                                <img src={tornado} />
                            </div>
                        </div>
                        <div className="detail">
                            <p>Humidity : {totalData.humidity} </p>
                            <div className="iconContainer">
                                <img src={humidity} />
                            </div>
                        </div>
                        <div className="detail">
                            <p>UV : {totalData.uv} </p>
                            <div className="iconContainer">
                                <img src={uv} />
                            </div>
                        </div>
                        <div className="detail">
                            <p>Wind direction : {totalData.wind_dir} </p>
                            <div className="iconContainer">
                                <img src={wind} />
                            </div>
                        </div>
                    </More>
                </AnimateSharedLayout>
            </MoreSection>
        )}

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
    @media screen and (max-width: 501px){
        .current-data,
        .current-weather {
            h1 {
                font-size: 6vw;
                display: flex;
                flex-direction: column;
                span {
                    font-size: .65rem;
                }
            }

        }
    }
`

const MoreSection = styled.section`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 2;
    row-gap: 2rem;
    row-gap: 2rem;
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
    position: relative;
    .arrowContainer {
        width: 30px;
        height: 30px;
        margin: auto;
        position: relative;
        img {
            position: absolute;
            top: 0;
            left: 0;
            max-width: 100%;
            max-height: 100%;
            transition: all .3s ease;
            &.sec {
                top: 12px;
            }
            &.th {
                
                top: 25px;
                filter: invert(89%) sepia(10%) saturate(1747%) hue-rotate(73deg) brightness(99%) contrast(87%);
            }
            &.off {
                top: 0px;
            } 
        }
    }
    h2 {
        border: 1px solid transparent;
        padding: 1.2rem;
        width: 150px;
        margin: auto;
        background: rgba(0,0,0,.4);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(12.1px);
        -webkit-backdrop-filter: blur(12.1px);
        &:hover {
            border: 1px solid rgba(255,255,255,0.3);
        }
    }
    .details {
        /* position: absolute;
        top: 100%;
        width: 100%; */
        grid-template-columns: repeat(auto-fill, [col-start] 241px [col-end]);
        display: grid;
        align-items: center;
        justify-content: flex-start;
        row-gap: 2rem;
        column-gap: 1.2rem;
        padding-bottom: 1rem;
        @media screen and (max-width: 601px){
            grid-template-columns: 45% 45%;
            column-gap: 0;
            justify-content: space-around;
        }
        .detail {
            padding: 3rem;
            background: rgba(0,0,0,.4);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(12.1px);
            -webkit-backdrop-filter: blur(12.1px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                max-width: 85px;
            }
            .iconContainer {
                width: 50px;
                height: auto;
                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            @media screen and (max-width: 601px){
                padding: 1rem;
            }
            @media screen and (max-width: 450px){
                padding: .85rem;
                p{
                    font-size: 4vw;
                }
                .iconContainer {
                    max-width: 35px;
                }
            }
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
`

const DayInfoContainer = styled.article`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 32%);
    margin: 2rem 0;
`

const HourSlider = styled.section`
    position: relative;
    .line {
        width: 100%;
        border-top: 1px solid #ffffff0e;
        position: absolute;
        bottom: 0;
        font-size: 10px;
        pointer-events: none;
        &.first, &.second, &.third, &.fourth {
            &:before {
                content: '10';
                position: absolute;
                top: -8px;
                left: -15px;
            }
        }
        &.first {
            &:before {
                content: '10';
            }
        }
        &.second {
            &:before {
                content: '20';
            }
        }
        &.third {
            &:before {
                content: '30';
            }
        }
        &.fourth {
            &:before {
                content: '40';
            }
        }
    }
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