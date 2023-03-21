import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
      }

      body {
        background-color: ${({ theme }) => theme.primary};
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        transition:  .5s;
      }
`;
