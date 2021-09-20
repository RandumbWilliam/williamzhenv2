import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "Montserrat";
        font-size: 62.5%;
        width: 100%;
    }
    p {
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle;