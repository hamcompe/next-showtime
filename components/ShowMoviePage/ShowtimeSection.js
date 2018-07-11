import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants'

const Label = styled.span`
  font-size: 12px;
  color: #999;
  margin-right: 6px;
  line-height: 16px;
`
const Row = styled.div`
  display: flex;
  margin-bottom: 6px;
`

const ShowtimeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid ${colors.grey};
`
const ShowtimeRow = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${colors.grey};
`
const TimeBox = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.grey};
  padding: 8px 16px;
  border-radius: 6px;
  margin: 6px;
`
const TimeBoxWrapper = styled.div`
  margin: 0 -6px;
  display: flex;
  flex-wrap: wrap;
`
const InformationLabel = styled(Label)`
  text-transform: uppercase;
  margin-right: 16px;
`

const EmojiSpan = styled.span.attrs({
  role: 'img',
})`
  margin-right: 4px;
`
const ShowtimeCinemaInfoWrapper = styled.div`
  margin-bottom: 16px;
`
const ShowtimeItem = ({
  cinema, extra, audio, is3d, showtimes, technology,
}) => (
  <ShowtimeRow>
    <ShowtimeCinemaInfoWrapper>
      <Row>
        {cinema && (
          <InformationLabel>
            <EmojiSpan aria-label="cinema">🎬</EmojiSpan>
            cinema: {cinema}
          </InformationLabel>
        )}
        {extra && (
          <InformationLabel>
            extra:
            {extra}
          </InformationLabel>
        )}
      </Row>
      <Row>
        {audio && (
          <InformationLabel>
            <EmojiSpan aria-label="audio">🔈</EmojiSpan>
            {audio}
          </InformationLabel>
        )}
        {is3d && (
          <InformationLabel>
            <EmojiSpan aria-label="is3d">👓️</EmojiSpan>
            3D
          </InformationLabel>
        )}
        {technology && (
          <InformationLabel>
            <EmojiSpan aria-label="technology">🎞️</EmojiSpan>
            {technology}
          </InformationLabel>
        )}
      </Row>
    </ShowtimeCinemaInfoWrapper>

    <TimeBoxWrapper>
      {showtimes.map(showtime => <TimeBox key={showtime}>{showtime}</TimeBox>)}
    </TimeBoxWrapper>
  </ShowtimeRow>
)

export default ({ showtimeList }) => (
  <ShowtimeLayout>
    {showtimeList.map((data, idx) => <ShowtimeItem key={idx} {...data} />)}
  </ShowtimeLayout>
)
