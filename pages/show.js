import React from 'react'
import styled from 'styled-components'
import { uniq, prop, map, pipe } from 'ramda'
import { format } from 'date-fns'

import MovieCard from '../components/MovieCard'
import OmdbService from '../lib/OmdbService'
import ShowtimeService from '../lib/ShowtimeService'
import MainLayout from '../layouts/MainLayout'
import { generateKeyWrapper } from '../lib/helpers'

const getData = prop('results')
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

const mapUniqueMovieTitle = pipe(map(prop('movie_title')), uniq)
const arrToObj = arr => arr.reduce((result, item) => ({ ...result, [item.key]: item.value }), {})

class Page extends React.PureComponent {
  static async getInitialProps({ query: { id } }) {
    if (!id) return {}
    const showtimesResponse = await ShowtimeService.getShowtimes(id)
    const movies = getData(showtimesResponse)
    const movieIds = mapUniqueMovieTitle(movies)
    const imdbInfo = await Promise.all(movieIds.map(async (movieTitle) => {
      const omdb = await OmdbService.getData(movieTitle)
      return {
        key: movieTitle,
        value: {
          id: prop('imdbID')(omdb),
          rating: prop('imdbRating')(omdb),
        },
      }
    }))
    const imdbInfoMapper = arrToObj(imdbInfo)
    const moviesWithImdb = movies.map(item => ({
      ...item,
      imdb: imdbInfoMapper[item.movie_title],
    }))
    const sanitizedData = generateKeyWrapper(moviesWithImdb)

    const theaterResponse = await ShowtimeService.getTheater(id)

    return { data: sanitizedData, theater: theaterResponse.data }
  }

  render() {
    const { data, theater } = this.props

    return (
      <MainLayout>
        <DateText>{displayToday()}</DateText>
        <Title>{theater.english}</Title>
        <MovieListLayout>
          {data.map(movie => <MovieCard key={movie.id} data={movie.value} />)}
        </MovieListLayout>
      </MainLayout>
    )
  }
}
Page.defaultProps = {
  theater: {},
  data: [],
}

export default Page
