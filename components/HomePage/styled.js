import styled from 'styled-components'

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  align-self: stretch;
  border-radius: 6px;
  box-shadow: 0 25px 40px 0 hsla(0, 0%, 0%, 0.03);
`
export const HomeLayout = styled.div`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  grid-gap: 18px;
`
