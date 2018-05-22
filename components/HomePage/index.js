import { HomeLayout } from './styled'
import MainLayout from '../../layouts/MainLayout'
import TheaterSelection from '../TheaterSelection'
import PosterImage from './PosterImage'

function HomePage({ data, movies }) {
  return (
    <MainLayout>
      <TheaterSelection data={data} />
      <HomeLayout>
        {movies && movies.map(obj => <PosterImage key={obj.movieId} movieId={obj.movieId} />)}
      </HomeLayout>
    </MainLayout>
  )
}

export default HomePage
