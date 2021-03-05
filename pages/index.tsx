import { HOME_HEADER_IMG_URL } from 'common/theme'
import Button from 'components/Button'
import HeadingFluidImage from 'components/HeadingFluidImage'

const Index = () => {
  return (
    <div>
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
    </div>
  )
}

export default Index
