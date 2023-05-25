import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

// font, color, reset

const GlobalStyle = createGlobalStyle `
    ${reset}

    @font-face {
        font-family: 'Pretendard-Regular';
        font-weight: 300;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Light.ttf') format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: 'Pretendard-Medium';
        font-weight: 500;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf') format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: 'Pretendard-Bold';
        font-weight: 700;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf') format("truetype");
        font-display: swap;
    }

    :root {
        --font--Bold: 'Pretendard-Bold';
        --font--Medium: 'Pretendard-Medium';
        --font--Regular: 'Pretendard-Regular';
    }


    :root {
        --primaryColor: #21BF48;
        --black: #000000;
        --gray900: #5E5E5E;
        --gray800: #A9A9A9;
        --gray700: #C4C4C4;
        --gray600: #F2F2F2;
        --white: #FFFFFF;
    }

    body {
        font-family: var(--font--Regular);
        color: var(--black)
    }

    input {
        all: unset;
    }


    button {
        all: unset;
    }

    img {
        vertical-align: top;
    }

`

export default GlobalStyle