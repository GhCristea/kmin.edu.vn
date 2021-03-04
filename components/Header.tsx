import { FC } from 'react'

import {
  AppBar,
  Button,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import Image from 'next/image'

import { ABOUT_US, ARTICLES, COURSES, HOME_PAGE, SHOWROOM } from 'common/paths'
import {
  APP_BAR_HEIGHT,
  APP_BAR_LOGO_HEIGHT,
  APP_BAR_LOGO_URL,
  APP_BAR_LOGO_WIDTH,
} from 'common/theme'

import Link from './Link'

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
      <Toolbar className={classes.toolbar}>
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

            {MENU_ITEMS.map((menuItem) => (
              <Link
                gridItem
                key={menuItem.path}
                href={menuItem.path}
                className={classes.menuItem}
              >
                <Typography variant="body1">{menuItem.label}</Typography>
              </Link>
            ))}

            <Grid item>
              <Button variant="contained" className={classes.skillTestButton}>
                Kiểm tra kỹ năng
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(({ palette, transitions }) => ({
  root: { height: APP_BAR_HEIGHT },
  toolbar: { minHeight: APP_BAR_HEIGHT },
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
    height: 44,
    fontSize: '18px',
    '&:hover': {
      backgroundColor: palette.background.paper,
    },
  },
}))

export default Header
