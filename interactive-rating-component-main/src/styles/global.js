import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --orange: hsl(25, 97%, 53%);
    --white: hsl(0, 0%, 100%);
    --lightGrey: hsl(217, 12%, 63%);
    --mediumGrey: hsl(216, 12%, 54%);
    --darkBlue: hsl(213, 19%, 18%);
    --veryDarkBlue: hsl(216, 12%, 8%);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--veryDarkBlue);
    min-height: 100vh;
    display: flex;
    flex-directioN: column;
    justify-content: center;
    align-items: center;
  }

  body, input, textarea, button {
    font-family: 'Overpass', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  html {

  }
`
