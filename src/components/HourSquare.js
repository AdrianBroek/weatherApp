import React from "react";
import styled from "styled-components";

const HourSquare = ({el, id, temperature}) => {

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
    background-color: hsla(145, 67%, 49%, 0.281);
    border-top: 1px dashed #29d16fff;
    height: 20px;
    text-align: center;
    cursor: pointer;
    position: relative;
    transition: all .12s ease;
    &:hover {
            background: #29d16fff;
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