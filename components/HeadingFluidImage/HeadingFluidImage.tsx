import { FC, ReactNode, useMemo } from 'react'

import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import Image from 'next/image'

import AccentShape from 'components/AccentShape'

export type HeadingFluidImageProps = {
  title: string
  subtitle: string
  imageSrc: string
  actions?: ReactNode[]
}

const HeadingFluidImage: FC<HeadingFluidImageProps> = (props) => {
  const classes = useStyles(props)
  const { imageSrc, subtitle, title, actions } = props

  const content = useMemo(
    () => (
      <Box paddingTop={8}>
        <Typography variant="h1" color="primary" marginBottom={1}>
          {title}
        </Typography>
        <Typography variant="body1" marginBottom={1}>
          {subtitle}
        </Typography>
        {actions && actions.length > 0 && (
          <Box marginTop={4}>
            <Grid container spacing={2}>
              {actions.map((action, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid item key={idx}>
                  {action}
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    ),
    [actions, subtitle, title],
  )

  const image = useMemo(
    () => (
      <AccentShape position="bottom-left">
        <Image
          src={imageSrc}
          height={500}
          width={720}
          className={classes.image}
        />
      </AccentShape>
    ),
    [classes.image, imageSrc],
  )

  return (
    <Container className={classes.root}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
          {content}
        </Grid>
        <Grid item xs={12} sm={6}>
          {image}
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(({ spacing, mixins, shape }) => ({
  root: {
    paddingTop: spacing(10),
    paddingBottom: spacing(6),
  },
  image: {
    ...shape,
    ...mixins.roundedCorners.topLeft,
    overflow: 'hidden',
  },
}))

export default HeadingFluidImage
