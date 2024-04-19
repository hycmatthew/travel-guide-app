import React from 'react'
import { useTranslation } from "@/lib/i18n";

interface HeadertProps { 
  lang: string
}

const HeaderLayout = async({ lang }: HeadertProps) => {

  const { t } = await useTranslation(lang, "translation");

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
