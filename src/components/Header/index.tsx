import logoImg from '../../assets/logo.svg'
import { Container, Content, Logo } from './styles'

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="logo" />
          <h1>Moneiro</h1>
        </Logo>
        <button
          type="button"
          onClick={onOpenModal}
        >New Transaction</button>
      </Content>
    </Container>
  )
}