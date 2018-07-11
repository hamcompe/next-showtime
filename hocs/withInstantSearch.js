import React from 'react'
import { InstantSearch } from 'react-instantsearch/dom'
import getConfig from 'next/config'

const {
  publicRuntimeConfig: { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME } = {},
} = getConfig()

const withInstantSearch = Component => props => (
  <InstantSearch appId={ALGOLIA_APP_ID} apiKey={ALGOLIA_API_KEY} indexName={ALGOLIA_INDEX_NAME}>
    <Component {...props} />
  </InstantSearch>
)

export default withInstantSearch
