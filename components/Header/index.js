import React, { Fragment } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const NAVBAR_SPACE = '50px'
const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  height: ${NAVBAR_SPACE};
  align-items: center;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 25px 40px 0 hsla(0, 0%, 0%, 0.03);
`
const OffsetSpace = styled.div`
  height: ${NAVBAR_SPACE};
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
const Wrapper = styled.div`
  padding: 0 12px;
  text-align: center;
`

const Logo = styled.span`
  font-size: 20px;
`

export default function () {
  return (
    <Fragment>
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
      <OffsetSpace />
    </Fragment>
  )
}
