import React, {useState} from "react";

const DayInfo = ({date, astro, day, hour, index}) => {
    const [hourData, setHourData] = useState(hour[0])
    const [slideValue, setSlideValue] = useState(0)
    const handleChange = (e) => {
       
        setHourData(hour[e.target.value])
        setSlideValue(e.target.value)
    }
    // console.log(index)
    return (
        <section>
        <div>
            <h2> {date}</h2>
            <h2> 
                Temperature in C:  {day.avgtemp_c}
                Temperature in f:  {day.avgtemp_f}
            
            </h2>
            <h2> Gust: {day.avgvis_km}</h2>
            <h2> Condition:  {day.condition.text}
            <img src={day.condition.icon} />
            </h2>
            <h2> Chance of rain: {day.daily_chance_of_rain}</h2>
            <h2> UV  {day.uv}</h2>
        </div>
        <div>
            <h2>By hour:</h2>
            <input type='range' value={slideValue} min="0" max="23" onChange={handleChange}/>
            {hourData && (
                <>
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
                <div>
                    Cloud: {hourData.cloud}% 
                    {hourData.condition.text}
                    <img src={hourData.condition.icon} />
                </div>
                </>
            )}
        </div>
        </section>
    )
}

export default DayInfo