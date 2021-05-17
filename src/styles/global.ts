import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
--red: #E52E4D;
--purple: #5429CC;
--purple-light: #6933FF;

--text-title: #363F5F;
--text-body: #969CB3;
--background: #F0F2F5;
--shape: #FFF;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width: 720){
    font-size: 87.5%;
  }
}

body{
  background: var(--background);
  --webkit-font-smoothing: antialiased;
}

button{
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

`