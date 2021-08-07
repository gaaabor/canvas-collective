import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { rem } from 'polished'

export default createGlobalStyle`
  ${normalize}

  body{
    -webkit-font-smoothing: antialiased;
    margin: 0;
    background: #FFF; 
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  h2, h3 {
    font-size: ${rem(22)};
  }

  p {
    font-size: ${rem(18)};
    line-height: 1.5;
  }
`
