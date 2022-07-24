import  {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        font-family: system-ui;
    }
    body {
        /* background: blue; */
    }
    .leaflet-container {
        width: 100vw;
        margin: auto;
        height: 300px;
    }
`

export default GlobalStyles