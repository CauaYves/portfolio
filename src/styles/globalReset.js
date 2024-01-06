import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primaryfont: "Fira Code", Arial, Helvetica, sans-serif;
    --secondaryfont: "Raleway";
    --terciaryfont: "Source Code Pro";
  }

  * {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    transition: all 1s ease;
  }

a {
    text-decoration: none;
    position: relative;
    margin-right: 40px;
    text-shadow: 1px 1px 2px #007acc3f;
    font-family: var(--terciaryfont), Arial, Helvetica, sans-serif;

    &:before {
      content: "";
      position: absolute;
      bottom: -2px;
      height: 2px;
      width: 100%;
      background-color: white;
      transform: scaleX(0);
      transition: transform 0.2s linear;
    }

    &:hover:before {
      transform: scaleX(1);
    }
  }

  h1 {
    font-family: var(--primaryfont), Arial, Helvetica, sans-serif;
    text-rendering: geometricPrecision;
    background: linear-gradient(60deg, #2d2d2d, #1f5a80);
    background-clip: padding-box;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
  }

  p {
    font-family: var(--secondaryfont), Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: var(--primary-color); // Use a cor primária definida no contexto
  }
`;

export default GlobalStyles;
