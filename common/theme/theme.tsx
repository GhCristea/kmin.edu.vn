import { CSSProperties } from 'react'

import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  BORDER_RADIUS,
  TEXT_FONT,
  HEADING_FONT,
  ROUNDED_CORNER_RADIUS,
} from './theme.constants'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  shape: {
    borderRadius: BORDER_RADIUS,
  },
  typography: {
    fontSize: 16,
    // htmlFontSize: 18,
    allVariants: {
      fontFamily: TEXT_FONT,
    },
    h1: {
      fontFamily: HEADING_FONT,
      fontWeight: 700,
      fontSize: '53px',
      lineHeight: '63.6px',
    },
    h2: {
      fontFamily: HEADING_FONT,
      fontWeight: 700,
      fontSize: '39px',
      lineHeight: '46.8px',
    },
    h3: {
      fontFamily: HEADING_FONT,
      fontWeight: 700,
      fontSize: '31px',
      lineHeight: '37.76px',
    },
    h4: {
      fontFamily: HEADING_FONT,
      fontWeight: 700,
      fontSize: '25px',
      lineHeight: '30.45px',
    },
  },
  shadows: [
    'none',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgb(57 40 166 / 15%)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
    '0px 0px 40px rgba(16, 57, 85, 0.12)',
  ],
  mixins: {
    roundedCorners: {
      topLeft: { borderTopLeftRadius: ROUNDED_CORNER_RADIUS },
      topRight: { borderTopRightRadius: ROUNDED_CORNER_RADIUS },
      bottomLeft: { borderBottomLeftRadius: ROUNDED_CORNER_RADIUS },
      bottomRight: { borderBottomRightRadius: ROUNDED_CORNER_RADIUS },
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        disableShrink: false,
      },
    },
  },
})

declare module '@material-ui/core/styles/createMixins' {
  interface Mixins {
    roundedCorners: Record<
      'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight',
      CSSProperties
    >
  }
}

export default theme
