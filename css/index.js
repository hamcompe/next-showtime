import { injectGlobal, css } from 'styled-components'

const mainCss = css`
  body {
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    background: #fafafa;
  }
  a {
    color: inherit;
    text-decoration: none;

    :visited {
      color: inherit;
    }
  }
`

export default injectGlobal(mainCss)
