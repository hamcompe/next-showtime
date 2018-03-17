import styled from 'styled-components'

export default styled.a`
  border-bottom: 1px solid #0068ef;
  transition: all 0.3s ease;
  outline: 1rem solid hsla(199, 28%, 24%, 0);
  text-decoration: none;

  :hover {
    background: hsla(199, 28%, 24%, 0.2);
    outline: 3px solid hsla(199, 28%, 24%, 0.2);
    border-width: 3px;
    color: #fff;
  }

  :visited {
    color: inherit;
  }
`
