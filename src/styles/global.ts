import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
--red: #E52E4D;
--green: #33CC95;
--purple: #5429CC;
--purple-light: #6933FF;
--white: #FFF;

--text-title: #363F5F;
--text-body: #969CB3;
--background: #F0F2F5;
--shape: #FFF;
--input-background: #e7e9ee;
--input-border: #d7d7d7;
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

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6 , strong {
  font-weight: 600;
}

button{
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay{
  background: rgba(0, 0 , 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.react-modal-content{
  margin: 0 1rem;
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border:0;
  background: transparent;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8);
  }
}

`