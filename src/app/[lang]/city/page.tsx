import React from 'react'
import { useTranslations } from 'next-intl';

interface CityInfoPageProps { 
  params: { lang: string }
}

const CityInfoPage = ({params: { lang }}: CityInfoPageProps) => {

  const t = useTranslations();

  return (
    <>
      <h1>Test</h1>
      <p>{t("city")}</p>
    </>
  )
}

export default CityInfoPage