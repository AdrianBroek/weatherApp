import React from "react";
import styled from "styled-components";

const HourSquare = ({el, id, height}) => {

    return (
        <HourSquareStyle 
        style={{height: height*5}}
        >
            <p>{height}</p>
        </HourSquareStyle>
    )
}

const HourSquareStyle = styled.div`
    width: 100%;
    /* background-color: RGB(225,93,68); */
    border: 1px dashed RGB(225,93,68);
    height: 20px;
    text-align: center;
    &:hover {
            background: RGB(225,93,68);
        }
    p {
        color: white;
    }
`

export default HourSquare