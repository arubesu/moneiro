import { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

interface Transaction {
  id: number,
  description: string,
  category: string,
  value: number,
  date: Date,
  type: string,
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then((response) => {
      setTransactions(response.data.transactions);
    });
  }, [])

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
