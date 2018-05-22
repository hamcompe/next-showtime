import React, { Fragment } from 'react'

import ShowMovieMainPage from './ShowMovieMainPage'
import MainLayout from '../../layouts/MainLayout'
import TheaterSelection from '../TheaterSelection'
import MovieBottomSelection from './MovieBottomSelection'

function ShowMoviePage({ currentMovie, otherMovieIds, data }) {
  return (
    <Fragment>
      <MainLayout>
        <TheaterSelection data={data} />
        {currentMovie && <ShowMovieMainPage {...currentMovie} />}
      </MainLayout>
      {otherMovieIds && <MovieBottomSelection movieIds={otherMovieIds} />}
    </Fragment>
  )
}

export default ShowMoviePage
