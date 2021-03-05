import { FC } from 'react'

import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { CaretRight } from 'phosphor-react'

import { COURSES } from 'common/paths'
import CourseListItem, { CourseEntity } from 'components/CourseListItem'
import Link from 'components/Link'

const description =
  'Reprehenderit esse labore id veniam ut veniam non ex veniam ut veniam essio Reprehenderit esse labore id veniam ut veniam non ex veniam ut veniam essio'

const courses: CourseEntity[] = [
  {
    id: '1',
    name: 'Lập trình Front-end cơ bản',
    description,
    imageUrl: '/assets/images/home/frontend-1.jpg',
  },
  {
    id: '2',
    name: 'Lập trình web Back-end với PHP toàn tập',
    description,
    imageUrl: '/assets/images/home/programming-1.jpg',
  },
  {
    id: '3',
    name: 'Lập trình Front-end nâng cao',
    description,
    imageUrl: '/assets/images/home/programming-2.jpg',
  },
  {
    id: '4',
    name: 'Cơ sở dữ liệu',
    description,
    imageUrl: '/assets/images/home/data.jpg',
  },
]

export type UpcomingCoursesProps = {}

const UpcomingCourses: FC<UpcomingCoursesProps> = (props) => {
  const classes = useStyles(props)

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h1" color="primary" marginBottom={2}>
          Các lớp học sắp khai giảng tháng 3
        </Typography>

        <Link href={COURSES}>
          <Typography variant="body2" display="flex" alignItems="center">
            Xem tất cả <CaretRight size={16} />
          </Typography>
        </Link>

        <Box marginTop={8} width="100%">
          <Grid container spacing={6}>
            {courses.map((course) => (
              <CourseListItem
                key={course.id}
                course={course}
                gridItem={{
                  xs: 6,
                  sm: 3,
                }}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(12),
    paddingBottom: spacing(28),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export default UpcomingCourses
