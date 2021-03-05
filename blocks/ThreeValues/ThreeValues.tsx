/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react'

import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from '@material-ui/core'

import { IconComponent } from 'common/typings'

type ValueItemProps = {
  icon: IconComponent
  title: string
  subtitle: string
}

export type ThreeValuesProps = {
  values: [ValueItemProps, ValueItemProps, ValueItemProps]
}

const ThreeValues: FC<ThreeValuesProps> = (props) => {
  const classes = useStyles(props)
  const { values } = props

  return (
    <Container className={classes.root}>
      <Grid container spacing={7}>
        {values.map((value, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <ValueItem {...value} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const ValueItem: FC<ValueItemProps> = (props) => {
  const { icon: Icon, subtitle, title } = props
  const theme = useTheme()

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      wrap="nowrap"
      alignItems="center"
    >
      <Grid item>
        <Icon weight="duotone" size={64} color={theme.palette.secondary.main} />
      </Grid>
      <Grid item>
        <Typography variant="h4" color="primary" align="center">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" align="center">
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(12),
    paddingBottom: spacing(10),
  },
}))

export default ThreeValues
