import React from 'react'
import { withRouter } from 'next/router'
import { connectHits } from 'react-instantsearch/connectors'
import { pipe, propOr, prop, path, uniq } from 'ramda'

import withInstantSearch from '../hocs/withInstantSearch'
import ShowMoviePage from '../components/ShowMoviePage'
import HomePage from '../components/HomePage'

class Page extends React.Component {
  getCurrentTheater = () => {
    const { hits = [], router: { query: { theater } } } = this.props
    if (!theater) return hits[0]
    return hits.find(obj => obj.objectID === theater)
  }
  getCurrentMovie = () => {
    const currentTheater = this.getCurrentTheater()
    if (!currentTheater) {
      return null
    }
    const { router: { query: { movie } } } = this.props
    const currentShowtimeList = propOr([], 'showtimeList')(currentTheater)
    const currentMovieShowtimeList = currentShowtimeList.filter(obj => obj.movieId === +movie)

    if (currentMovieShowtimeList.length === 0) {
      this.autoChangeMovie(currentShowtimeList)
      return null
    }

    const {
      movieId, movieTitle, director, imdbRating,
    } = currentTheater.movieMap[movie]

    return {
      movieId,
      movieTitle,
      theaterName: prop('theaterName')(currentTheater),
      showtimeList: currentMovieShowtimeList,
      director,
      imdbRating,
    }
  }
  autoChangeMovie = (otherMovies = []) => {
    const { router: { push: routerPush, pathname, query } } = this.props
    if (otherMovies.length > 0) {
      const pickMovie = path(['0', 'movieId'])(otherMovies)
      return routerPush({ pathname, query: { ...query, movie: pickMovie } })
    }
    delete query.movie
    return routerPush({ pathname: '/dashboard', query })
  }
  getOtherMovieIds = () => {
    const currentTheater = this.getCurrentTheater()
    if (!currentTheater) return null
    const { router: { query: { movie } } } = this.props

    const allMovieIds = propOr([], 'showtimeList')(currentTheater).map(obj => obj.movieId)
    return uniq(allMovieIds).filter(id => id !== +movie)
  }

  isSelectMovie = () => {
    const { router: { query: { movie } } } = this.props
    return !!movie
  }
  isSelectTheater = () => {
    const { router: { query: { theater } } } = this.props
    return !!theater
  }
  getCurrentTheaterMovies = () => {
    const currentTheater = this.getCurrentTheater()
    if (!currentTheater) return null
    return Object.values(currentTheater.movieMap)
  }

  render() {
    const { hits, router: { push: routerPush, pathname, query } } = this.props

    if (!this.isSelectTheater() && hits && hits.length > 0) {
      routerPush({ pathname, query: { ...query, theater: hits[0].objectID } })
    }

    if (this.isSelectMovie()) {
      const currentMovie = this.getCurrentMovie()
      const otherMovieIds = this.getOtherMovieIds()
      return <ShowMoviePage currentMovie={currentMovie} otherMovieIds={otherMovieIds} data={hits} />
    }

    const currentTheaterMovies = this.getCurrentTheaterMovies()
    return <HomePage data={hits} movies={currentTheaterMovies} />
  }
}

export default pipe(connectHits, withInstantSearch, withRouter)(Page)
