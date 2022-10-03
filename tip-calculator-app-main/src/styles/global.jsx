import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --strong-cyan: hsl(183, 100%, 15%);
    --very-dark-cyan: hsl(183, 100%, 15%);
    --dark-grayish-cyan: hsl(186, 14%, 43%);
    --grayish-cyan: hsl(184, 14%, 56%);
    --light-grayish-cyan: hsl(185, 41%, 84%);
    --very-light-grayish-cyan: hsl(189, 41%, 97%);
    --white: hsl(189, 41%, 97%);
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Space Mono', sans-serif;
    height: 100%;
    background-color: var(--light-grayish-cyan);
  }

  body, #root {
    height: 100%;
  }
`;
