import { useContext } from 'react';
import { TransactionContext } from '../../Contexts/TransactionContext';
import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        {transactions && transactions.map(transaction => (
          <tbody key={transaction.id}>
            <tr>
              <td>{transaction.description}</td>
              <td className={transaction.type}>{
                new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(transaction.value)
              }</td>
              <td>{transaction.category}</td>
              <td>{
                new Intl.DateTimeFormat(
                  'en-US',
                ).format(new Date(transaction.date))
              }</td>
            </tr>
          </tbody>
        ))}

      </table>
    </Container>
  );
}
