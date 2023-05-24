import GlobalStyle from "./style/GlobalStyle"
import ElementStyle from "./style/ElementStyle"
import { ThemeProvider } from "styled-components";
import theme from './style/theme'


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <ElementStyle />
          <p>안녕하세요</p>
          <ul>
            <li>sd</li>
            <li>ss</li>
          </ul>
      </ThemeProvider>
    </>
  );
}
export default App;
