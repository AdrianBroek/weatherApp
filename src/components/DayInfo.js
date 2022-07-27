import React, {useContext, useState} from "react";

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

    // console.log(hour)


    function getDayName(dateStr, locale)
    {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }

    var dateStr = '05/23/2014';
    var day = getDayName(dateStr, "nl-NL"); // Gives back 'Vrijdag' which is Dutch for Friday.

    const handleChange = (e) => {
        setHourData(hour[e.target.value])
        if (index == 0){

        }else {}
        setSlideValue(e.target.value)
    }

    const dayHandler = (ind) => {
        if ( ind == 0) {
            return 'Today'
        } else if (ind == 1){
            return 'Tommorow'
        }else {
            return 'After tomorrow'
        }
    }

    const updateData = () => {
        setActiveindex(index)
        setTotalData(hourData)
    }
    return (
        <DayInfoContainer className={activeindex == index ? 'active' : ''}
        onClick={()=>updateData()}>
        <div >

            {hourData && (
                <>
                <h2>{dayHandler(index)}</h2>
                <div>
                    Date: {hourData.time.substring(0, hourData.time.indexOf(' '))}
                </div>
                <h2>By hour:</h2>
                <input type='range' value={slideValue} min="0" max="23" onChange={handleChange}/>
                <div>
                    Time: {hourData.time.substring(11)}
                </div>
                <div>
                    Temperature in C:{hourData.temp_c}
                    <br />
                    Temperature in F:{hourData.temp_f}
                </div>
                <div>
                    feelslike in C:{hourData.feelslike_c}
                    <br />
                    feelslike in F:{hourData.feelslike_f}
                </div>
                <div>
                    feelslike in C:{hourData.feelslike_c}
                    <br />
                    feelslike in F:{hourData.feelslike_f}
                </div>
                <div className="cloudy">
                    <h3>Cloud: {hourData.cloud}% </h3>
                    <div className="cloudyItems">
                        <h3>{hourData.condition.text}</h3>
                        <img src={hourData.condition.icon} />
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
    .cloudy {
        .cloudyItems {
            display: flex;
            justify-content: flex-start;
        }
    }
    &.active {
      background-color: #e15d44;
      color: #fff;
      border: none;
      box-shadow: 1px 3px 6px rgba(255,255,255, .5) 
    }
`

export default DayInfo