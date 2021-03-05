import { FC } from 'react'

import { Box, makeStyles, Typography } from '@material-ui/core'
import Image from 'next/image'

const DEFAULT_IMAGE_HEIGHT = 255
const TITLE_MAX_ROWS = 2
const DESCRIPTION_MAX_ROWS = 3

export type GridListItemProps = {
  imageUrl: string
  title: string
  description: string
  imageHeight?: number
}

const GridListItem: FC<GridListItemProps> = (props) => {
  const classes = useStyles(props)
  const {
    imageHeight = DEFAULT_IMAGE_HEIGHT,
    imageUrl,
    title,
    description,
  } = props

  return (
    <div className={classes.root}>
      <Box height={imageHeight} className={classes.imageWrapper}>
        <Image src={imageUrl} layout="fill" objectFit="cover" />
      </Box>
      <Typography
        variant="h4"
        color="primary"
        my={2}
        title={title}
        className={classes.title}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        className={classes.description}
      >
        {description}
      </Typography>
    </div>
  )
}

const useStyles = makeStyles(({ shape, mixins }) => ({
  root: {},
  imageWrapper: {
    width: '100%',
    position: 'relative',
    ...shape,
    ...mixins.roundedCorners.topLeft,
    overflow: 'hidden',
  },
  title: {
    WebkitLineClamp: TITLE_MAX_ROWS,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
  },
  description: {
    WebkitLineClamp: DESCRIPTION_MAX_ROWS,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
  },
}))

export default GridListItem
