import { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

interface Transaction {
  id: number,
  title: string,
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
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        {transactions && transactions.map(transaction => (
          <tbody key={transaction.id}>
            <tr>
              <td>{transaction.title}</td>
              <td>{transaction.value}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>
            </tr>
          </tbody>
        ))}

      </table>
    </Container>
  );
}
