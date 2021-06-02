import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/modals/NewTransactionModal";
import { TransactionContextProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";

//(https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const closeNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  const openNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  return (
    <TransactionContextProvider>
      <GlobalStyle />
      <Header onOpenModal={openNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModal}
      />
      <Dashboard />
    </TransactionContextProvider>
  );
}