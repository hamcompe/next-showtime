import { InstantSearch } from 'react-instantsearch/dom'

/* eslint prefer-destructuring: 0 */
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME

const withInstantSearch = Component => props => (
  <InstantSearch appId={ALGOLIA_APP_ID} apiKey={ALGOLIA_API_KEY} indexName={ALGOLIA_INDEX_NAME}>
    <Component {...props} />
  </InstantSearch>
)

export default withInstantSearch
