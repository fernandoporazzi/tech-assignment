import styled from 'styled-components'
import Link from 'next/link';

const Nav = styled.nav`
  color: ${({ theme }) => theme.colors.primary};
`

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
`
const Li = styled.li`
  margin: 0 10px;
`

export default () => <Nav>
  <Ul>
    <Li>
      <Link href={`?tag=story`} as={`/story`}>
        <a>new</a>
      </Link>
    </Li>
    <Li>
      <Link href={`?tag=front_page`} as={`/front_page`}>
        <a>past</a>
      </Link>
    </Li>
    <Li>
      <Link href={`?tag=comment`} as={`/comment`}>
        <a>comments</a>
      </Link>
    </Li>
    <Li>
      <Link href={`?tag=ask_hn`} as={`/ask_hn`}>
        <a>ask</a>
      </Link>
    </Li>
  </Ul>
</Nav>