import incomeImg from '../../assets/income.svg';
import debtImg from '../../assets/debt.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, cur) => {

    if (cur.type === 'credit') {
      acc.credits += cur.value;
      acc.total += cur.value;
    } else {
      acc.debts += cur.value;
      acc.total -= cur.value;
    }

    return acc;
  }, {
    credits: 0,
    debts: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>{
          Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.credits)
        }</strong>
      </div>
      <div>
        <header>
          <p>Debts</p>
          <img src={debtImg} alt="debts" />
        </header>
        <strong>-{
          Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.debts)
        }</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{
          Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)
        }</strong>
      </div>
    </Container>
  )
}

