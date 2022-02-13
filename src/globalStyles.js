import { createGlobalStyle } from "styled-components";

export const size = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1440px',
}

export const device = {
    xs: `(max-width: ${size.sm})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`,
};

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