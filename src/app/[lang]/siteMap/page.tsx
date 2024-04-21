import React from 'react'
import { useTranslations } from 'next-intl';

interface SiteMapPageProps { 
  params: { lang: string }
}

const SiteMapPage = ({params: { lang }}: SiteMapPageProps) => {

  const t = useTranslations();

  return (
    <>
      <h1>Test</h1>
      <p>{t("city")}</p>
    </>
  )
}

export default SiteMapPage