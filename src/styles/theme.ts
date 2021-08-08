export interface ThemeType {
  palette: {
    white: string
    black: string
    grey: string
    mercury: string
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
    hover: string
  }
  border: {
    thin: string
    thick: string
  }
  fontSize: {
    sm: number
    base: number
    md: number
    lg: number
    xl: number
  }
  fontWeight: {
    normal: number
    bold: number
  }
  spacing: {
    section: {
      sm: number
      lg: number
    }
  }
}

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`

const mainTheme: ThemeType = {
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
    hover: `@media (hover: hover)`,
  },
  border: {
    thin: '1px solid #E4E4E4',
    thick: '4px solid #E4E4E4',
  },
  fontSize: {
    sm: 14,
    base: 16,
    md: 18,
    lg: 20,
    xl: 22,
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  spacing: {
    section: {
      sm: 50,
      lg: 65,
    },
  },
}

export default mainTheme
