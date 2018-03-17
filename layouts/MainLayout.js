import styled from 'styled-components'
import { Fragment } from 'react'

import Header from '../components/Header'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
const Wrapper = styled.div`
  padding: 0 12px;
`

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </Fragment>
  )
}

export default Layout
