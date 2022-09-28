import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-cyan: hsl(193, 38%, 86%);
    --neon-green: hsl(150, 100%, 66%);
    --grayish-blue: hsl(217, 19%, 38%);
    --dark-grayish-blue: hsl(217, 19%, 24%);
    --dark-blue: hsl(218, 23%, 16%);
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Manrope', sans-serif;
    height: 100%;
    background-color: var(--dark-blue);
  }

  body, #root {
    height: 100%;
  }
`;
