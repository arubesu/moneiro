import incomeImg from '../../assets/income.svg';
import debtImg from '../../assets/debt.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';
import { useContext } from 'react';
import { TransactionContext } from '../../Contexts/TransactionContext';

export function Summary() {
  const { transactions } = useContext(TransactionContext);

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

