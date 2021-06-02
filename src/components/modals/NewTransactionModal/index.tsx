import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import { Container, TransactionBoxSelector, TransactionBoxSelectorButton } from './styles'
import closeImg from '../../../assets/close.svg'
import incomeImg from '../../../assets/income.svg'
import debtImg from '../../../assets/debt.svg'
import { TransactionContext } from '../../../Contexts/TransactionContext';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Transaction {
  description: string;
  value: number;
  type: 'credit' | 'debt';
  category: string;
}

const defaultTransaction: Transaction = {
  description: '',
  value: 0,
  type: 'credit',
  category: ''
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [selectedTransaction, setSelectedTransaction] = useState<'credit' | 'debt'>('credit');
  const [transaction, setTransaction] = useState<Transaction>(defaultTransaction);
  const { createNewTransaction } = useContext(TransactionContext);

  const onTransactionSelectionChange = (selectedTransaction: 'credit' | 'debt') => {
    setSelectedTransaction(selectedTransaction);
    setTransaction({
      ...transaction,
      type: selectedTransaction,
    })
  }

  const handleClose = () => {
    setSelectedTransaction('credit');
    setTransaction(defaultTransaction)
    onRequestClose();
  }

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
    createNewTransaction(
      transaction,
    );
  }

  const onTransactionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setTransaction({
      ...transaction,
      [name]: value,
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <Container
        onSubmit={(e) => handleCreateNewTransaction(e)}
      >

        <pre>
        </pre>

        <button
          className="react-modal-close"
          onClick={handleClose}
        >
          <img
            src={closeImg}
            alt="close"
          />
        </button>
        <h2>Register Transaction</h2>

        <input
          onChange={(e) => onTransactionChange(e)}
          name="description"
          type="text"
          placeholder="Description" />

        <input
          onChange={(e) => onTransactionChange(e)}
          name="value"
          type="number"
          step="0.01"
          placeholder="value" />

        <TransactionBoxSelector>
          <TransactionBoxSelectorButton
            name="type"
            type="button"
            isActive={selectedTransaction === 'credit'}
            activeColor="green"
            onClick={() => onTransactionSelectionChange('credit')}
          >
            <img
              src={incomeImg}
              alt="income"
            />
            <span>Income</span>
          </TransactionBoxSelectorButton>

          <TransactionBoxSelectorButton
            name="type"
            type="button"
            isActive={selectedTransaction === 'debt'}
            activeColor="red"
            onClick={() => onTransactionSelectionChange('debt')}
          >
            <img
              src={debtImg}
              alt="income"
            />
            <span>Debt</span>
          </TransactionBoxSelectorButton>

        </TransactionBoxSelector>

        <input
          onChange={(e) => onTransactionChange(e)}
          name="category"
          type="text"
          placeholder="category" />

        <button
          type="submit"
        >
          Register
        </button>
      </Container>

    </Modal>
  )
}