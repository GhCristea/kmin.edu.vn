import { FC } from 'react'

import Header from './Header'

export type LayoutProps = {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
