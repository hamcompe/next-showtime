import styled from 'styled-components'

const BORDER_RADIUS = '10px'

export const Card = styled.div`
  display: flex;
  background: #fff;
  box-shadow: 0 25px 40px 0 hsla(0, 0%, 0%, 0.03);
  min-height: 100px;
  margin-bottom: 36px;
  border-radius: ${BORDER_RADIUS};
  position: relative;
  min-height: 160px;
`
export const MovieLayout = styled.div`
  display: grid;
  grid-template-columns: 130px auto;
`
export const MoviePoster = styled.div`
  content: '';
  img {
    position: absolute;
    width: 115px;
    left: 12px;
    top: -18px;
    box-shadow: 0 15px 40px 0 hsla(0, 0%, 0%, 0.14);
  }
`
export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`

export const MovieTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
`
export const MovieInfo = styled.div`
  font-size: 16px;
  line-height: 1.4;
`

export const MovieShowtimes = styled.div`
  margin: 24px -12px 0px -12px;
  display: flex;
  flex-wrap: wrap;
`
export const Showtime = styled.div`
  padding: 0 12px;
`
