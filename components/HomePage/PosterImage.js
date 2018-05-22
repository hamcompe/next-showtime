import Link from 'next/link'
import { withRouter } from 'next/router'
import { pipe } from 'ramda'

import { Poster } from './styled'
import withImageSource from '../../hocs/withImageSource'

function PosterImage({ router: { pathname, query = {} }, imageSource, movieId }) {
  const href = { pathname, query: { ...query, movie: movieId } }
  return (
    <Link href={href}>
      <a>
        <Poster src={imageSource} />
      </a>
    </Link>
  )
}

export default pipe(withImageSource, withRouter)(PosterImage)
