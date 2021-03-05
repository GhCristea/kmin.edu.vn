import { Heart, Medal, Smiley } from 'phosphor-react'

import ThreeValuesBlock from 'blocks/ThreeValues'
import UpcomingCourses from 'blocks/UpcomingCourses'
import { HOME_HEADER_IMG_URL } from 'common/theme'
import Button from 'components/Button'
import FindYourTrueCourses from 'components/FindYourTrueCourses'
import HeadingFluidImage from 'components/HeadingFluidImage'

const Index = () => {
  return (
    <>
      <HeadingFluidImage
        title="Học lập trình với trải nghiệm xuất sắc"
        subtitle="Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident."
        imageSrc={HOME_HEADER_IMG_URL}
        actions={[
          <Button variant="contained" color="primary" size="large">
            Kiểm tra kỹ năng miễn phí
          </Button>,
          <Button variant="outlined" color="primary" size="large">
            Đăng ký tư vấn
          </Button>,
        ]}
      />

      <ThreeValuesBlock
        values={[
          {
            icon: Heart,
            title: 'Tận tâm',
            subtitle:
              'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident',
          },
          {
            icon: Smiley,
            title: 'Tận lực',
            subtitle:
              'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident',
          },
          {
            icon: Medal,
            title: 'Tận khả năng',
            subtitle:
              'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident',
          },
        ]}
      />

      <FindYourTrueCourses />

      <UpcomingCourses />
    </>
  )
}

export default Index
