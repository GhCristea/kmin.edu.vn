import { FC, ReactNode, useState } from 'react'

import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'

export type PointItemProps = {
  title: string
  content: ReactNode
}

export type PointListProps = {
  points: PointItemProps[]
}

const PointList: FC<PointListProps> = (props) => {
  const classes = useStyles(props)
  const { points } = props
  const [selectedIdx, setIdx] = useState(0)

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={5} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            marginY={-0.25}
          >
            {points.map((point, idx) => (
              <Box
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className={clsx(classes.pointItem, {
                  selected: idx === selectedIdx,
                })}
                onClick={() => setIdx(idx)}
              >
                <Typography variant="h4" color="primary">
                  {point.title}
                </Typography>
                <>
                  <Box
                    bgcolor="#d0d0d0"
                    width={idx === selectedIdx ? '100%' : 0}
                    className={classes.topLine}
                  />
                  <Box
                    bgcolor="secondary.main"
                    width={idx === selectedIdx ? '50%' : 0}
                    className={classes.topLine}
                  />
                </>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} md={6}>
          {points[selectedIdx]?.content}
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles(
  ({ shadows, spacing, shape, palette, transitions }) => ({
    root: {},
    pointItem: {
      padding: spacing(4),
      boxShadow: shadows[0],
      backgroundColor: 'transparent',
      cursor: 'pointer',
      margin: spacing(0.25, 0),
      transition: transitions.create('box-shadow', {
        duration: transitions.duration.short,
      }),
      position: 'relative',
      ...shape,

      '&.selected': {
        boxShadow: shadows[1],
        background: palette.background.paper,
      },
      '&:hover': {
        boxShadow: shadows[2],
        background: palette.background.paper,
      },
    },
    topLine: {
      position: 'absolute',
      height: 4,
      left: 0,
      top: 0,
      zIndex: 1,
      transition: transitions.create('width', {
        duration: transitions.duration.standard,
        easing: transitions.easing.easeInOut,
        delay: 200,
      }),
      ...shape,
    },
  }),
)

export default PointList
