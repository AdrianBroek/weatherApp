import React, {useContext} from "react";
import styled from "styled-components";
import StateContext from './StateContext';

const Overlay = () => {
    const { 
        active,
        setActive
    } = useContext(StateContext)

    return (
        <>
        {active && (
            <OverlayStyle onClick={() => setActive(false)}>

            </OverlayStyle>
        )}
        </>
    )
}

const OverlayStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export default Overlay