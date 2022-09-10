import  {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        font-family: system-ui;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #0e203c;
        /* color: RGB(225, 93, 68); */
        color: #fff;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-origin: content-box;
        -webkit-transition: background-image 0.2s ease-in-out;
        transition: background-image 0.2s ease-in-out;
    }
    .map {
        height: 200px;
        width: 100%;
        z-index: -1;
        filter: brightness(0.5);
        border-radius: 0.5rem;
        overflow: hidden;
        margin: 3rem 0;
    }
    .leaflet-container {
        width: 100%;
        height: 100%;
        z-index: 1;
        .leaflet-control-container {
            display: none;
        }
    }
`

export default GlobalStyles