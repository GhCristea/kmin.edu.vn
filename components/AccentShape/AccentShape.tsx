import { FC } from 'react'

import { Box, makeStyles, Theme } from '@material-ui/core'
import clsx from 'clsx'

import { withGridItem } from 'components/GridItemContainer'

const DEFAULT_SIZE = 120

export type AccentShapeProps = {
  position: 'bottom-left' | 'bottom-right'
  size?: number
}

const AccentShape: FC<AccentShapeProps> = (props) => {
  const classes = useStyles(props)
  const { position, children } = props

  return (
    <Box className={classes.root}>
      <Box className={clsx(classes.accent, position)} />
      {children}
    </Box>
  )
}

const useStyles = makeStyles<Theme, AccentShapeProps, 'root' | 'accent'>(
  ({ palette, mixins, shape }) => ({
    root: {
      position: 'relative',
    },
    accent: ({ size = DEFAULT_SIZE }) => ({
      position: 'absolute',
      background: palette.secondary.main,
      width: size,
      height: size,
      zIndex: 1,
      ...shape,
      ...mixins.roundedCorners.bottomRight,

      '&.bottom-left': {
        bottom: size / 3,
        left: -(size / 3),
      },
      '&.bottom-right': {
        bottom: size / 3,
        right: -(size / 3),
      },
    }),
  }),
)

export default withGridItem(AccentShape)
