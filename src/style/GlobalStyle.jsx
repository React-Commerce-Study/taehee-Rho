import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

// font, color, reset

const GlobalStyle = createGlobalStyle `
    @import url('https://webfontworld.github.io/pretendard/Pretendard.css');

    :root {
        --primaryColor: "#21BF48";
        --black: "#000000";
        --gray900: "#5E5E5E";
        --gray800: "#A9A9A9";
        --gray700: "#C4C4C4";
        --gray600: "#F2F2F2";
        --white: "#FFFFFF";
    }

    body {
        font-family: 'Pretendard';
        font-weight: 300;
        color: var(--black);
    }

    button {
        all: unset;
    }

    img {
        vertical-align: top;
    }



    ${reset}
`

export default GlobalStyle