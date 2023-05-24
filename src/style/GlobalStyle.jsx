import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

// font, color, reset

const GlobalStyle = createGlobalStyle `
    @import url('https://webfontworld.github.io/pretendard/Pretendard.css');

    body {
        font-family: 'Pretendard';
        font-weight: 300;
        color: ${(props) => props.theme.black}
    }

    ${reset}
`

export default GlobalStyle