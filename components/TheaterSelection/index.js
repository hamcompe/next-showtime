import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'next/router'
import { colors } from '../../constants'

const Select = styled.select`
  background: ${colors.grey};
  width: 100%;
  font-size: 18px;
  margin: 24px 0;
`
class PureTheaterSelection extends React.Component {
  handleSelect = (data) => {
    const { router: { pathname, query, push } } = this.props
    push({ pathname, query: { ...query, theater: data.target.value } })
  }
  render() {
    const { data = [], router: { query: { theater } } } = this.props
    return (
      <Select onChange={this.handleSelect} value={theater}>
        {data.map((item = {}) => (
          <option value={item.objectID} key={item.objectID}>
            {item.theaterName}
          </option>
        ))}
      </Select>
    )
  }
}
export default withRouter(PureTheaterSelection)
