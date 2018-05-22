import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import MovieCard from '../../components/MovieCard'

const displayToday = (formatStr = 'dddd D MMMM') => format(new Date(), formatStr)

const MovieListLayout = styled.div``
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 48px;
`
const DateText = styled.div`
  color: #888;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
`

class Page extends React.PureComponent {
  render() {
    const { theaterName, showtimeList = [] } = this.props.data

    return (
      <div>
        <DateText>{displayToday()}</DateText>
        <Title>{theaterName}</Title>
        <MovieListLayout>
          {showtimeList.map((movie, idx) => <MovieCard key={idx} data={movie} />)}
        </MovieListLayout>
      </div>
    )
  }
}
Page.defaultProps = {
  theater: {},
  data: {},
}

export default Page
