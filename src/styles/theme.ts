export interface ITheme {
  palette: {
    primary: string
    black: string
    white: string
  }
  containerMaxWidth: {
    sm: number
    md: number
    lg: number
    xl: number
  }
  gridGutter: {
    sm: number
    md: number
    lg: number
  }
  media: {
    sm: string
    md: string
    lg: string
    xl: string
    custom: string
    hover: string
  }
  border: {
    thick: string
  }
}

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`

const mainTheme = {
  palette: {
    white: '#FFFFFF',
    black: '#000',
    grey: '#656565',
    mercury: '#E5E5E5',
  },
  containerMaxWidth: {
    sm: 560,
    md: 740,
    lg: 980,
    xl: 1290,
  },
  gridGutter: {
    sm: 16,
    md: 20,
    lg: 30,
  },
  media: {
    sm: customMediaQuery(576),
    md: customMediaQuery(768),
    lg: customMediaQuery(992),
    xl: customMediaQuery(1280),
    custom: customMediaQuery,
    hover: `@media (hover: hover)`,
  },
  border: {
    thick: '4px solid #E4E4E4',
  },
}

export default mainTheme
