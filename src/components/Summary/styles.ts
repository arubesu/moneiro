import styled from 'styled-components';

interface ThemeStyle {
  background: string;
  color: string;
}
interface Theme {
  green: ThemeStyle;
  red: ThemeStyle;
  default: ThemeStyle;
}

const themes: Theme = {
  green: {
    background: '#33CC95',
    color: '#FFF'
  },
  red: {
    background: '#E52E4D',
    color: '#FFF'
  },
  default: {
    background: '#FFF',
    color: '#363F5F'
  }
}

export const Container = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 2rem;
 margin-top: -10rem;
`;

interface SummaryBoxProps {
  boxStyle?: 'green' | 'red';
}

export const SummaryBox = styled.div<SummaryBoxProps>`
  background: ${props => themes[props.boxStyle ?? 'default' as 'red' | 'default' | 'green'].background};
  padding: 1.5rem 2rem;
  color: ${props => themes[props.boxStyle ?? 'default' as 'red' | 'default' | 'green'].color};
  border-radius: 0.25rem;

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
`;
