import React from "react";
import styled from "styled-components";

const HourSquare = ({el, id, temperature}) => {
    // console.log(id % 2)
    return (
        <HourSquareStyle 
        style={{height: temperature*5}}
        >
        <p className="temp">{id % 2 ? temperature : ''}</p>
        <p className="time">{id % 2 ? el.time.substring(11) : ''}</p>

        </HourSquareStyle>
    )
}

const HourSquareStyle = styled.div`
    width: 100%;
    background-color: #8f70d154;
    border-top: 1px dashed #8f70d1;
    height: 20px;
    text-align: center;
    cursor: pointer;
    position: relative;
    &:hover {
            background: #8f70d1;
        }
    p {
        color: white;
        font-weight: 500;
        font-size: 60%;
        @media screen and (max-width: 300px) {
            font-size: 40%;
        }
    }
    .temp {
        @media screen and (max-width: 500px) {
            display: none;
        }
    }
    .time {
        position: absolute;
        left: -20%;
        bottom: 5%;
        z-index: 99;
    }
`

export default HourSquare