import React from 'react'
import { path, filter } from 'ramda'
import styled from 'styled-components'
import Link from 'next/link'

import ShowtimeService from '../lib/ShowtimeService'
import LinkHighlight from '../components/LinkHighlight'
import MainLayout from '../layouts/MainLayout'

const getResult = path(['data', 'results'])

const MY_FAVORITES = [2, 121]
const idInMyFavorite = (obj = {}) => MY_FAVORITES.indexOf(obj.id) > -1
const filterFavorite = filter(idInMyFavorite)

const ListWrapper = styled.div`
  line-height: 1.5;
`

class Page extends React.Component {
  static async getInitialProps() {
    const response = await ShowtimeService.getTheaters()
    const data = getResult(response)
    const favoriteTheaters = filterFavorite(data)
    return { data, favorite: favoriteTheaters }
  }

  render() {
    const { data, favorite } = this.props
    return (
      <MainLayout>
        <h1>Favorite</h1>
        <ListWrapper>
          {favorite.map(item => (
            <div key={item.id}>
              <Link href={{ pathname: '/show', query: { id: item.id } }} passHref>
                <LinkHighlight>{item.english}</LinkHighlight>
              </Link>
            </div>
          ))}
        </ListWrapper>
        <br />
        <h1>List</h1>
        <ListWrapper>
          {data.map(item => (
            <div key={item.id}>
              {/* <Link href={`/show?id=${item.id}`}>
                <LinkHighlight>{item.english}</LinkHighlight>
              </Link> */}
              <LinkHighlight href={`/show?id=${item.id}`}>{item.english}</LinkHighlight>
            </div>
          ))}
        </ListWrapper>
      </MainLayout>
    )
  }
}
Page.defaultProps = {
  data: [],
  favorite: [],
}

export default Page
