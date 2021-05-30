import styled from 'styled-components';
import { darken, transparentize } from 'polished'

export const Container = styled.form`

display: flex;
flex-direction: column;

 h2 {
   color: var(--text-title);
   font-family: 'Poppins';
   font-weight: 600;
   font-size: 1.5rem;
   margin-bottom: 2rem;
 }
 
 input {
   width: 100%;
   padding: 0 1.5rem;
   height: 4rem;
   border-radius: 0.25rem;
   border: 1px solid var(--input-border);
   background: var(--input-background);
   font-weight: 400;
   font-size: 1rem;

   &::placeholder {
     color: var(--text-body);
   }

   & + input {
     margin-top: 1rem;
   }

  /* Chrome, Safari, Edge, Opera */
  &[type=number]:-webkit-outer-spin-button,
  &[type=number]:-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
 }

 button[type="submit"] {
     width: 100%;
     padding: 0 1.5rem;
     height: 4rem;
     font-weight: 600;
     background: var(--green);
     color: var(--white);
     border: 0;
     border-radius: 0.25rem;
     font-size: 1rem;
     margin-top: 1.5rem;
     transition: filter 0.2s;

     &:hover{
       filter: brightness(0.9);
     }
   }
`;

export const TransactionBoxSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
  margin: 1rem 0;
`;

const colors = {
  green: '#12A454',
  red: '#E52E4D',
}

interface TransactionBoxSelectorButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const TransactionBoxSelectorButton = styled.button<TransactionBoxSelectorButtonProps>`

  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;

  border: 1px solid #d7d7d7;  
  border-radius: 0.25rem;
  transition: border-color 0.2s;

  background: ${props =>
    props.isActive ?
      transparentize(0.9, colors[props.activeColor]) :
      'transparent'};

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

img {
  width: 1.25rem;
  height: 1.25rem;
}

span{
  display: inline-block;
  margin-left: 1rem;
  font-size: 1rem;
  color: var(--text-title)
}
`
