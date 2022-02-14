import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  font-size: 62.5%;
  background: #2B2A29;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  width: 100%;
}

#root{
  height: 100%;
  width: 100%;
}

:root{
  --primary-color: #B77A1A;
  --background-dark: #2B2A29;
}

a{
  cursor: pointer;
}

`;

export default GlobalStyle;
