import logoImg from '../../assets/logo.svg'
import { Container, Content, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="logo" />
          <h1>Moneiro</h1>
        </Logo>
        <button type="button">New Transaction</button>
      </Content>
    </Container>
  )
}