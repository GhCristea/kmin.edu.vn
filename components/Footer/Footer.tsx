import { FC } from 'react'

import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import clsx from 'clsx'
import Image from 'next/image'
import {
  Envelope,
  FacebookLogo,
  House,
  InstagramLogo,
  Phone,
  YoutubeLogo,
} from 'phosphor-react'

import { HOME_PAGE } from 'common/paths'
import {
  KMIN_FACEBOOK_URL,
  KMIN_INSTAGRAM_URL,
  KMIN_YOUTUBE_URL,
  LOGO_LIGHT_URL,
} from 'common/theme'
import Link from 'components/Link'

const VERTICAL_PADDING = 7.5
const COLUMN_SPACING = 4
const LOGO_WIDTH = 137
const LOGO_HEIGHT = 56
const MENU_SPACING = 2

const MENU = [
  {
    title: 'Lớp học',
    items: [
      {
        title: 'Javascript cơ bản',
        url: '/courses/1',
      },
      {
        title: 'Python cơ bản',
        url: '/courses/1',
      },
      {
        title: 'Python nâng cao',
        url: '/courses/1',
      },
      {
        title: 'Front-end toàn tập',
        url: '/courses/1',
      },
    ],
  },
  {
    title: 'Showroom',
    items: [
      {
        title: 'Javascript cơ bản',
        url: '/courses/1',
      },
      {
        title: 'Python cơ bản',
        url: '/courses/1',
      },
      {
        title: 'Python nâng cao',
        url: '/courses/1',
      },
      {
        title: 'Front-end toàn tập',
        url: '/courses/1',
      },
      {
        title: 'Front-end toàn tập 2',
        url: '/courses/1',
      },
    ],
  },
  {
    title: 'Bài viết',
    items: [
      {
        title: 'Javascript cơ bản',
        url: '/courses/1',
      },
      {
        title: 'Python cơ bản',
        url: '/courses/1',
      },
      {
        title: 'Python nâng cao',
        url: '/courses/1',
      },
      {
        title: 'Front-end toàn tập',
        url: '/courses/1',
      },
    ],
  },
  {
    title: 'Về chúng tôi',
    items: [
      {
        title: 'Javascript cơ bản',
        url: '/courses/1',
      },
      {
        title: 'Python cơ bản',
        url: '/courses/1',
      },
      {
        title: 'Python nâng cao',
        url: '/courses/1',
      },
    ],
  },
]

export type FooterProps = {}

const Footer: FC<FooterProps> = (props) => {
  const classes = useStyles(props)

  return (
    <Paper square elevation={0} className={classes.root}>
      <Container>
        <Grid container spacing={COLUMN_SPACING}>
          <Grid item xs={12} sm={12} md={12} lg="auto">
            <Link href={HOME_PAGE}>
              <Image
                alt="Kmin Education"
                src={LOGO_LIGHT_URL}
                height={LOGO_HEIGHT}
                width={LOGO_WIDTH}
              />
            </Link>
          </Grid>

          <Grid item xs>
            <Grid container spacing={COLUMN_SPACING}>
              {MENU.map((menu) => (
                <Grid item key={menu.title} xs={12} sm={6} md={3}>
                  <Grid
                    container
                    spacing={MENU_SPACING}
                    direction="column"
                    wrap="nowrap"
                  >
                    <Grid item>
                      <Typography className={classes.menuTitle}>
                        {menu.title}
                      </Typography>
                    </Grid>
                    {menu.items.map((menuItem) => (
                      <Grid item key={menuItem.title}>
                        <Link href={menuItem.url} className={classes.menuItem}>
                          <Typography>{menuItem.title}</Typography>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Grid
              container
              spacing={MENU_SPACING}
              direction="column"
              wrap="nowrap"
            >
              <Grid item>
                <Typography className={classes.menuTitle}>Liên hệ</Typography>
              </Grid>
              <Grid item>
                <ContactItem icon={Phone}>
                  <a href="tel:+84384004298">+84 38 4004 298</a>
                  <br />
                  <a href="tel:+84816020416">+84 81 6020 416</a>
                </ContactItem>
              </Grid>
              <Grid item>
                <ContactItem icon={Envelope}>
                  <a href="mailto:academy@kmin.edu.vn">academy@kmin.edu.vn</a>
                </ContactItem>
              </Grid>
              <Grid item>
                <ContactItem icon={House}>
                  <strong>Cơ sở 1:</strong> 25A Mai Thị Lựu, P. Đakao, Quận 1,
                  TP. HCM
                </ContactItem>
              </Grid>
              <Grid item>
                <ContactItem>
                  <strong>Cơ sở 2:</strong> 860/25A Xô Viết Nghệ Tĩnh, phường
                  25, quận Bình Thạnh, TPHCM
                </ContactItem>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <a
                  href={KMIN_FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialItem}
                >
                  <FacebookLogo size={36} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href={KMIN_YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialItem}
                >
                  <YoutubeLogo size={36} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href={KMIN_INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialItem}
                >
                  <InstagramLogo size={36} />
                </a>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body2"
              className={clsx(classes.socialCopyright, classes.menuItem)}
            >
              &copy; 2021 Kmin Academy. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

const ContactItem: FC<{ icon?: typeof Phone }> = ({ icon: Icon, children }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.contactItem, classes.menuItem)}>
      <div className={classes.contactItemIcon}>
        {Icon && <Icon size={24} />}
      </div>
      <div className={classes.contactItemContent}>{children}</div>
    </div>
  )
}

const useStyles = makeStyles(({ palette, spacing, transitions }) => ({
  root: {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    paddingTop: spacing(VERTICAL_PADDING),
    paddingBottom: spacing(VERTICAL_PADDING),
    fontSize: '0.875rem',
  },
  menuTitle: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
  },
  menuItem: {
    color: 'inherit',
    fontSize: '0.875rem',
    textDecoration: 'none !important',
    '& > *': {
      fontSize: '0.875rem',
      opacity: 0.85,
      transition: transitions.create('opacity', {
        duration: transitions.duration.short,
      }),

      '&:hover': {
        opacity: 1,
      },
    },
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  contactItemIcon: {
    flexShrink: 0,
    marginRight: spacing(1.5),
    width: 24,
  },
  contactItemContent: {
    flex: 1,
    fontSize: '0.875rem',
    '& a': {
      color: 'inherit',
      textDecoration: 'none !important',
    },
  },
  socialCopyright: {
    textAlign: 'center',
    fontSize: '0.875rem',
  },
  socialItem: {
    height: 48,
    width: 48,
    color: 'inherit',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transition: 'background-color 0.2s',
    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
  },
}))

export default Footer
