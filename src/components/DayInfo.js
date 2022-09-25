import React, {useContext, useEffect, useState} from "react";
import StateContext from './StateContext';
// style
import styled from "styled-components";

const DayInfo = ({date, astro, day, hour, index}) => {
    const { 
        forecast,
        activeindex,
        setActiveindex,
        setTotalData
        } = useContext(StateContext)
    const [hourData, setHourData] = useState(hour[0])

    const getDayName = (dateStr, locale) => {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }

    var dateStr = '05-232014';

    const dayHandler = (ind, dateStr, locale) => {
        if ( ind == 0) {
            return getDayName(dateStr, locale)
        } else if (ind == 1){
            return getDayName(dateStr, locale)
        }else {
            return getDayName(dateStr, locale)
        }
    }

    // update data from active forecast day to output data panel
    const updateData = () => {
        setActiveindex(index)
        if (index == 0) {
            setTotalData(hourData)
        }else {
            setTotalData(hourData)
        }
    }
    
    let timestamp = new Date();
    // let hours = timestamp.getHours()
    // let minutes = timestamp.getMinutes()

    return (
        <DayInfoContainer className={activeindex == index ? 'active' : ''}
        onClick={()=>updateData()}>
        <div>
            {hourData && (
                <>
                <h2>{dayHandler(index, hourData.time.substring(0, hourData.time.indexOf(' ')),"en-US")}</h2>
                <div>
                    <p>{hourData.time.substring(0, hourData.time.indexOf(' '))}</p>
                </div>
                <div className="cloudy">
                    <h2>{forecast.forecastday[index].day.avgtemp_c}C°</h2>
                    <div className="cloudyItems">
                        <img src={forecast.forecastday[index].day.condition.icon} />
                        <p>{forecast.forecastday[index].day.condition.text}</p>
                    </div>
                </div>
                </>
            )}
        </div>
        </DayInfoContainer>
    )
}

const DayInfoContainer = styled.section`
    border: 1px solid transparent;
    padding: 1rem;
    border-radius: .5rem;
    grid-row: 2;
    cursor: pointer;
    background: rgba(0,0,0,.4);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
    transition: all .12s ease;
    .cloudy {
        span {
            font-size: .95rem;
        }
        .cloudyItems {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
        }
    }
    &.active {
        border: 1px solid rgba(255, 255, 255, 0.651);
        &:hover {
            border: 1px solid rgba(255, 255, 255, 0.651);
    }
    }
    &:hover {
        border: 1px solid rgba(255, 255, 255, 0.158);
    }
    @media screen and (max-width: 501px){
        h2 {
            font-size: 4vw;
        }
        p {
            font-size: 3vw;
        }
        img {
            max-width: 100%;
        }
    }

`

export default DayInfo