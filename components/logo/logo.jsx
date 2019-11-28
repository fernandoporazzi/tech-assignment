import styled from 'styled-components'
import Link from 'next/link';

const Logo = styled.h2`
  color: #000;
`

export default () => <Logo><Link href="/"><a>Hacker News</a></Link></Logo>