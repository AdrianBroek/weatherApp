import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import StateContext from './StateContext';
import HourSquare from "./HourSquare";

const Slider = ({hour, index, width}) => {
    const { 
        setTotalData,
        setActiveIndexTable,
        } = useContext(StateContext)
    const [hourData, setHourData] = useState(hour[0])

    const hourChanger = (ind) => {
        // setTotalData(hourData)
        setHourData(hour[ind])
        setActiveIndexTable(index)
    }

    // update totalData everytime hourdata changes
    useEffect(()=> {
        setTotalData(hourData)
    }, [hourData])

    return (
        <Container style={{width: width}}>
            {hour.map((el, ind)=> (
                <div key={ind} className="slCont" onClick={()=>hourChanger(ind)}>
                <HourSquare 
                    el={el}
                    id={ind}
                    temperature={el.temp_c}
                    >
                </HourSquare>
                </div>
            ))
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 1;
    .slCont {
        display: grid;
        place-items: end center;
        width: calc(100%/24);
    }
`

export default Slider