import Modal from 'react-modal';

import { Container, TransactionBoxSelector, TransactionBoxSelectorButton } from './styles'
import closeImg from '../../../assets/close.svg'
import incomeImg from '../../../assets/income.svg'
import debtImg from '../../../assets/debt.svg'
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Transaction {

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [selectedTransaction, setSelectedTransaction] = useState('credit');
  const [transaction, setTransaction] = useState(null);

  const handleClose = () => {
    setSelectedTransaction('credit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <Container>

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
          type="text"
          placeholder="Description" />

        <input
          type="text"
          placeholder="Price" />

        <TransactionBoxSelector>
          <TransactionBoxSelectorButton
            type="button"
            isActive={selectedTransaction === 'credit'}
            activeColor="green"
            onClick={() => setSelectedTransaction('credit')}
          >
            <img
              src={incomeImg}
              alt="income"
            />
            <span>Income</span>
          </TransactionBoxSelectorButton>

          <TransactionBoxSelectorButton
            type="button"
            isActive={selectedTransaction === 'debt'}
            activeColor="red"
            onClick={() => setSelectedTransaction('debt')}
          >
            <img
              src={debtImg}
              alt="income"
            />
            <span>Debt</span>
          </TransactionBoxSelectorButton>

        </TransactionBoxSelector>

        <input
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