import styled from 'styled-components';
import Logo from '../logo/logo';
import Nav from './nav';

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #ff6600;
`

export default () => (
  <Header>
    <Logo />
    <Nav />
  </Header>
);