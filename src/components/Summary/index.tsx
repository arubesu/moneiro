import incomeImg from '../../assets/income.svg';
import debtImg from '../../assets/debt.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>U$ 1000,0</strong>
      </div>
      <div>
        <header>
          <p>Debts</p>
          <img src={debtImg} alt="debts" />
        </header>
        <strong>-U$ 500,0</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>U$ 500,0</strong>
      </div>
    </Container>
  )
}

