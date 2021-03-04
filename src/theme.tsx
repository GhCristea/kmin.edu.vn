import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const PRIMARY_COLOR = '#103955'
const SECONDARY_COLOR = '#FFC82D'
const BORDER_RADIUS = 4
const TEXT_FONT = `"OpenSans","Helvetica","Arial",sans-serif`
const HEADING_FONT = `"OpenSans","Helvetica","Arial",sans-serif`

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
    htmlFontSize: 18,
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
})

export default theme
