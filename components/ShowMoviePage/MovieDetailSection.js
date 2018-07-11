import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants'

const MoviePageLayout = styled.div`
  display: grid;
  grid-template-columns: 38% auto;
  grid-column-gap: 16px;
  margin-bottom: 24px;
`
const PosterImage = styled.img`
  width: 100%;
  border-radius: 6px;
`
const LinkButton = styled.a`
  align-content: center;
  align-self: center;
  display: flex;
  padding: 16px;
  align-items: center;
  line-height: 1.3;
  background: ${colors.grey};
  border-radius: 6px;
`

const Star = styled.small`
  font-size: 10px;
`
const Value = styled.span`
  font-size: 16px;
`
const RatingValue = styled(Value)`
  display: flex;
  align-items: center;
  font-weight: 500;
`
const RatingStat = ({ rating }) => (
  <RatingValue>
    <Star>★</Star>
    {rating}
  </RatingValue>
)

const getGoogleSearch = str => `https://google.com/search?q=${encodeURI(str)}`

const MovieDetailLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  align-items: baseline;
  margin-bottom: auto;
`
const MovieRightSideLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 16px;
`
const Title2 = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`
const Label = styled.span`
  font-size: 12px;
  color: #999;
  margin-right: 6px;
  line-height: 16px;
`
export default class MovieDetailSection extends React.Component {
  render() {
    const {
      director, imdbRating, movieTitle, imageSource,
    } = this.props
    return (
      <MoviePageLayout>
        <PosterImage src={imageSource} />
        <MovieRightSideLayout>
          <Title2>{movieTitle}</Title2>
          <MovieDetailLayout>
            <Label>Director:</Label>
            <Value>{director}</Value>
            <Label>IMDb:</Label>
            <RatingStat rating={imdbRating} />
          </MovieDetailLayout>

          <LinkButton href={getGoogleSearch(movieTitle)} target="_blank">
            Open in Google.com
          </LinkButton>
        </MovieRightSideLayout>
      </MoviePageLayout>
    )
  }
}
