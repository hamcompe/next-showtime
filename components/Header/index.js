import styled from 'styled-components'
import Link from 'next/link'

const Navbar = styled.div`
  padding: 12px 0;
  margin-bottom: 12px;
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
const Wrapper = styled.div`
  padding: 0 12px;
`

const Logo = styled.span`
  font-size: 20px;
`

export default function () {
  return (
    <Navbar>
      <Container>
        <Wrapper>
          <Logo>
            <Link href="/">
              <a>Next Showtime</a>
            </Link>
          </Logo>
        </Wrapper>
      </Container>
    </Navbar>
  )
}
