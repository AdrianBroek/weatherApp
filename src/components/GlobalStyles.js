import  {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        font-family: system-ui;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        /* background-color: #0e203c; */
        background: #2c3e50;  /* fallback for old browsers */
        background: -webkit-linear-gradient(120deg, #2b83bd, #2c3e50);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(120deg, #2b83bd, #2c3e50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: #fff;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-origin: content-box;
        -webkit-transition: background-image 0.2s ease-in-out;
        transition: background-image 0.2s ease-in-out;
        height: 100%;
    }
    .map {
        height: 200px;
        width: 100%;
        z-index: -1;
        filter: brightness(0.9);
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