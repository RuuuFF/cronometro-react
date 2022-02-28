import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, input {
    border: 0;
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #222;
    color: #f2f2f2;
  }
`;