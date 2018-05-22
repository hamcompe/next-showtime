import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MovieDetailSection from './MovieDetailSection'
import ShowtimeSection from './ShowtimeSection'

import withImageSource from '../../hocs/withImageSource'

class ShowMovieMainPage extends React.Component {
  static propTypes = {
    director: PropTypes.string,
    imdbRating: PropTypes.string,
    movieTitle: PropTypes.string,
    showtimeList: PropTypes.array,
    imageSource: PropTypes.string,
  }

  render() {
    const {
      director, imdbRating, movieTitle, showtimeList, imageSource,
    } = this.props
    return (
      <Fragment>
        <MovieDetailSection
          director={director}
          imdbRating={imdbRating}
          movieTitle={movieTitle}
          imageSource={imageSource}
        />
        <ShowtimeSection showtimeList={showtimeList} />
      </Fragment>
    )
  }
}

export default withImageSource(ShowMovieMainPage)
