import React, {useContext, useEffect, useState} from "react";

import StateContext from './StateContext';

// style
import styled from "styled-components";

const DayInfo = ({date, astro, day, hour, index}) => {
    const { 
        forecast,
        activeindex,
        setActiveindex,
        setCurrent,
        totalData,
        setTotalData
        } = useContext(StateContext)
    const [hourData, setHourData] = useState(hour[0])
    const [slideValue, setSlideValue] = useState(0)

    const getDayName = (dateStr, locale) => {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }

    var dateStr = '05-232014';
    var day = getDayName(dateStr, "nl-NL"); // Gives back 'Vrijdag' which is Dutch for Friday.

    const dayHandler = (ind, dateStr, locale) => {
        if ( ind == 0) {
            return getDayName(dateStr, locale) + '(' + 'Today' + ')'
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
            setTotalData(hourData[hours])
        }else {
            setTotalData(hourData)
        }
    }
    
    let timestamp = new Date();
    let hours = timestamp.getHours()
    let minutes = timestamp.getMinutes()
    
    // console.log(forecast)
    return (
        <DayInfoContainer className={activeindex == index ? 'active' : ''}
        onClick={()=>updateData()}>
        <div>
            {hourData && (
                <>
                <h2>{dayHandler(index, hourData.time.substring(0, hourData.time.indexOf(' ')),"en-US")}</h2>
                <div>
                    Date: {hourData.time.substring(0, hourData.time.indexOf(' '))}
                </div>
                <div className="cloudy">
                    <h2>{forecast.forecastday[index].day.avgtemp_c}C°</h2>
                    <div className="cloudyItems">
                        <img src={forecast.forecastday[index].day.condition.icon} />
                        {forecast.forecastday[index].day.condition.text}
                    </div>
                </div>
                </>
            )}
        </div>
        </DayInfoContainer>
    )
}

const DayInfoContainer = styled.section`
    border: 2px solid;
    padding: 1rem;
    border-radius: .5rem;
    grid-row: 2;
    cursor: pointer;
    .cloudy {
        span {
            font-size: .95rem;
        }
        .cloudyItems {
            display: flex;
            justify-content: flex-start;
        }
    }
    &.active {
      background-color: #e15d44;
      color: #fff;
      border: none;
      box-shadow: 1px 3px 6px rgba(255,255,255, .15) 
    }
`

export default DayInfo