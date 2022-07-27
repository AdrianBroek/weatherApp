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
        color: RGB(225, 93, 68);
    }
    .map {
        position: absolute;
        top: 0;
        left: 0;
        height: 200px;
        width: 100vh;
        z-index: -1;
        filter: brightness(0.5);
    }
    .leaflet-container {
        width: 100vw;
        height: 350px;
        z-index: 1;
        .leaflet-control-container {
            display: none;
        }
    }
`

export default GlobalStyles