import { FC } from 'react'

import { makeStyles, Paper } from '@material-ui/core'

import { withGridItem } from 'components/GridItemContainer'
import GridListItem from 'components/GridListItem'

const MAX_HEIGHT = 445

export type CourseEntity = {
  id: string
  imageUrl: string
  name: string
  description: string
}

export type CourseListItemProps = {
  course: CourseEntity
}

const CourseListItem: FC<CourseListItemProps> = (props) => {
  const classes = useStyles(props)
  const { course } = props

  return (
    <Paper className={classes.root} elevation={2}>
      <GridListItem
        title={course.name}
        description={course.description}
        imageUrl={course.imageUrl}
      />
    </Paper>
  )
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(2),
    height: '100%',
    maxHeight: MAX_HEIGHT,
    overflow: 'hidden',
  },
}))

export default withGridItem(CourseListItem)
