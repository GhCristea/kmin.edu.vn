import { FC } from 'react'

import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import Image from 'next/image'

import { PATTERN_YELLOW_URL } from 'common/theme'
import Button from 'components/Button'

export type SkillTestHorizontalProps = {}

const SkillTestHorizontal: FC<SkillTestHorizontalProps> = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Box minWidth={940}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={6}>
              <Typography variant="h4" color="primary" gutterBottom>
                Thử sức với bài kiểm tra kĩ năng lập trình miễn phí cùng Kmin
              </Typography>
              <Typography variant="body1">
                Online, hoàn toàn miễn phí và có ngay kết quả!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <Box
                width="100%"
                height="100%"
                display="flex"
                alignItems="flex-end"
                justifyContent="flex-end"
              >
                <Button
                  variant="contained"
                  color="inherit"
                  labelColor="primary"
                  size="large"
                >
                  Kiểm tra kĩ năng miễn phí ngay!
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.background}>
          <Image
            src={PATTERN_YELLOW_URL}
            layout="fill"
            objectFit="cover"
            className={classes.background}
          />
        </Box>
      </Container>
    </div>
  )
}

const useStyles = makeStyles(({ spacing, mixins, shape }) => ({
  root: {
    marginBottom: spacing(8),
  },
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: spacing(8),
    paddingBottom: spacing(8),
  },
  background: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...shape,
    ...mixins.roundedCorners.topLeft,
  },
}))

export default SkillTestHorizontal
