import { FC } from 'react'

import Footer from './Footer'
import Header from './Header'

export type LayoutProps = {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
