import React, { ReactNode } from 'react'

type HeaderLayoutProps = {
  children: ReactNode
}

const HeaderLayout = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-icon"></div>
        <div className="header-menu"></div>
      </div>
    </header>
  )
}

export default HeaderLayout
