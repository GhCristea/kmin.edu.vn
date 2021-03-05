import { FC } from 'react'

import { Container, makeStyles, Typography } from '@material-ui/core'

import PointList, { PointItemProps } from 'components/PointList'

const content = `Sát với thực tế
Đề cương và lộ trình học được nghiên cứu kĩ lưỡng cùng với sự lắng nghe từ doanh nghiệp.

Chú trọng thực hành trên nền lý thuyết vững chắc
Kmin không đào tạo thợ code, Kmin đồng hành cùng bạn trên con đường thành developer chuyên nghiệp.

Tinh gọn, tối ưu
Không học dài dòng, học những tinh túy của lập trình với phương pháp giảng dạy hiện đại, giúp bạn đạt kết quả cao nhất trong thời gian ngắn nhất.`

const points: PointItemProps[] = [
  { title: 'Chương trình học', content },
  { title: 'Lớp học', content: content.substr(0, 200) },
  { title: 'Tinh gọn, tối ưu', content },
]

export type WhyKminProps = {}

const WhyKmin: FC<WhyKminProps> = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography
          variant="h1"
          color="primary"
          marginBottom={4}
          align="center"
        >
          Vì sao bạn nên học tại Kmin?
        </Typography>

        <PointList points={points} />
      </Container>
    </div>
  )
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(10),
    paddingBottom: spacing(6),
  },
  container: {
    // textAlign: 'center',
  },
}))

export default WhyKmin
