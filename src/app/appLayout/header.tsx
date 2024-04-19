import React from 'react'
import { useTranslations } from 'next-intl';

const HeaderLayout = () => {

  const t = useTranslations();

  return (
    <header>
      <div className="header-container">
        <div className="header-icon"></div>
        <div className="header-menu">{t("city")}</div>
      </div>
    </header>
  )
}

export default HeaderLayout
