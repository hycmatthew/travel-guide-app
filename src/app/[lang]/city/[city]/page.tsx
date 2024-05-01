import React from 'react'
import { useTranslations } from 'next-intl';

interface CityInfoPageProps { 
  params: { city: string }
}

const CityInfoPage = ({params: { city }}: CityInfoPageProps) => {

  const t = useTranslations();

  return (
    <>
      <h1>Test</h1>
      <p>{t(city)}</p>
    </>
  )
}

export default CityInfoPage