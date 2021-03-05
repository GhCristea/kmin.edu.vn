import { FC } from 'react'

import { Box } from '@material-ui/core'

import Footer from './Footer'
import Header, { APP_BAR_HEIGHT } from './Header'

export type LayoutProps = {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box minHeight={`calc(100vh - ${APP_BAR_HEIGHT}px)`}>{children}</Box>
      <Footer />
    </>
  )
}

export default Layout
