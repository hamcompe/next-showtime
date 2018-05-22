import React, { Fragment } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { pipe } from 'ramda'

import withImageSource from '../../hocs/withImageSource'

const MOVIE_BUTTOM_SIZE = '100px'
const MovieBottomSelectionOverlay = styled.div`
  position: fixed;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  height: ${MOVIE_BUTTOM_SIZE};
  width: 100vw;
  border-top: 1px solid #efefef;
`
const MovieButtomSelectionContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
const MovieBottomSelectionLayout = styled.div`
  display: flex;
  overflow: auto;
  align-items: center;
  min-height: ${MOVIE_BUTTOM_SIZE};
`
const MovieBottomSelectionOffset = styled.div`
  height: 100px;
  width: 100vw;
`
const ThumbnailImage = styled.img`
  max-width: 200px;
  max-height: 80px;
  margin: 0 6px;
  border-radius: 6px;
`
function PureMovieThumbnail({ router: { pathname, query = {} }, imageSource, movieId }) {
  const href = { pathname, query: { ...query, movie: movieId } }
  return (
    <Link href={href}>
      <a>
        <ThumbnailImage src={imageSource} />
      </a>
    </Link>
  )
}

const enhance = pipe(withImageSource, withRouter)
const MovieThumbnail = enhance(PureMovieThumbnail)

const ThumbnailOffset = styled.div`
  min-width: 6px;
  min-height: 1px;
`

class MovieBottomSelection extends React.Component {
  focusOverlay = e => e.target.focus()
  render() {
    const { movieIds } = this.props
    return (
      <Fragment>
        <MovieBottomSelectionOverlay onTouchStart={this.focusOverlay}>
          <MovieButtomSelectionContainer>
            <MovieBottomSelectionLayout>
              <ThumbnailOffset />
              {movieIds.map(movieId => <MovieThumbnail key={movieId} movieId={movieId} />)}
              <ThumbnailOffset />
            </MovieBottomSelectionLayout>
          </MovieButtomSelectionContainer>
        </MovieBottomSelectionOverlay>
        <MovieBottomSelectionOffset />
      </Fragment>
    )
  }
}

export default MovieBottomSelection
