import { FC } from 'react'

import {
  alpha,
  Container,
  Grid,
  makeStyles,
  Skeleton,
  Typography,
} from '@material-ui/core'

export type FindYourTrueCoursesProps = {}

const FindYourTrueCourses: FC<FindYourTrueCoursesProps> = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Container>
        <Typography
          variant="h2"
          color="primary"
          textAlign="center"
          marginBottom={2}
        >
          Bạn đang tìm kiếm lớp học với mục tiêu nào?
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          textAlign="center"
          marginBottom={8}
        >
          Lưạ chọn một phương án bên dưới để Kmin giúp bạn tìm ra lộ trình học
          phù hợp nhé!
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={6} md={3}>
            <Skeleton
              variant="rectangular"
              height={260}
              width="100%"
              animation={false}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Skeleton
              variant="rectangular"
              height={260}
              width="100%"
              animation={false}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Skeleton
              variant="rectangular"
              height={260}
              width="100%"
              animation={false}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Skeleton
              variant="rectangular"
              height={260}
              width="100%"
              animation={false}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

const useStyles = makeStyles(({ mixins, palette, spacing }) => ({
  root: {
    backgroundColor: alpha(palette.secondary.main, 0.25),
    paddingTop: spacing(12),
    paddingBottom: spacing(30),
    ...mixins.roundedCorners.topLeft,
  },
}))

export default FindYourTrueCourses
