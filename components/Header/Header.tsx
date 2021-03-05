import { FC } from 'react'

import {
  AppBar,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core'
import Image from 'next/image'

import { ABOUT_US, ARTICLES, COURSES, HOME_PAGE, SHOWROOM } from 'common/paths'
import { LOGO_LIGHT_URL } from 'common/theme'
import Button from 'components/Button'

import Link from '../Link'

export const APP_BAR_HEIGHT = 92
const APP_BAR_LOGO_URL = LOGO_LIGHT_URL
const APP_BAR_LOGO_HEIGHT = 48
const APP_BAR_LOGO_WIDTH = 118

const MENU_ITEMS = [
  {
    label: 'Lớp học',
    path: COURSES,
  },
  {
    label: 'Showroom',
    path: SHOWROOM,
  },
  {
    label: 'Bài viết',
    path: ARTICLES,
  },
  {
    label: 'Về chúng tôi',
    path: ABOUT_US,
  },
]

export type HeaderProps = {}

const Header: FC<HeaderProps> = (props) => {
  const classes = useStyles(props)

  return (
    <AppBar position="sticky" color="primary" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3} alignItems="center">
          <Link gridItem href={HOME_PAGE}>
            <Image
              alt="Kmin Education"
              src={APP_BAR_LOGO_URL}
              height={APP_BAR_LOGO_HEIGHT}
              width={APP_BAR_LOGO_WIDTH}
            />
          </Link>

          <Grid item xs />

          <Hidden smDown>
            {MENU_ITEMS.map((menuItem) => (
              <Link
                gridItem
                key={menuItem.path}
                href={menuItem.path}
                className={classes.menuItem}
              >
                <Typography variant="body2">{menuItem.label}</Typography>
              </Link>
            ))}

            <Hidden mdDown>
              <Button
                gridItem
                variant="contained"
                size="large"
                className={classes.skillTestButton}
              >
                Kiểm tra kỹ năng
              </Button>
            </Hidden>
          </Hidden>
        </Grid>
      </Container>
    </AppBar>
  )
}

const useStyles = makeStyles(({ palette, transitions }) => ({
  root: { height: APP_BAR_HEIGHT, display: 'flex', justifyContent: 'center' },
  container: {},
  menuItem: {
    color: palette.primary.contrastText,
    textDecoration: 'none !important',
    '& > *': {
      opacity: 0.85,
      transition: transitions.create('opacity', {
        duration: transitions.duration.short,
      }),

      '&:hover': {
        opacity: 1,
      },
    },
  },
  skillTestButton: {
    backgroundColor: palette.background.paper,
    color: palette.primary.main,
    // height: 44,
    '&:hover': {
      backgroundColor: palette.background.paper,
    },
  },
}))

export default Header
