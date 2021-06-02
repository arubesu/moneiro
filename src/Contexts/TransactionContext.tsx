import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number,
  description: string,
  category: string,
  value: number,
  date: Date,
  type: string,
}

type CreateTransactionInput = Omit<Transaction, 'date' | 'id'>

interface TransactionContextProviderProps {
  children: ReactNode;
}

interface TransactionContextState {
  transactions: Transaction[];
  createNewTransaction: (transaction: CreateTransactionInput) => void;
}

export const TransactionContext = createContext({} as TransactionContextState);

export const TransactionContextProvider = ({ children }: TransactionContextProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then((response) => {
      setTransactions(response.data.transactions);
    });
  }, [])

  const createNewTransaction = (transaction: CreateTransactionInput) => {
    api.post('/transactions',
      transaction,
    );
  }

  return <TransactionContext.Provider
    value={{
      transactions,
      createNewTransaction
    }}
  >
    {children}
  </TransactionContext.Provider>
}

