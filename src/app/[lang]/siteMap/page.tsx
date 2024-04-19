import React from 'react'
import { useTranslation } from "@/lib/i18n";

interface SiteMapPageProps { 
  params: { lang: string }
}

const SiteMapPage = async({params: { lang }}: SiteMapPageProps) => {

  const { t } = await useTranslation(lang, "translation");

  return (
    <>
      <h1>Test</h1>
      <p>{t("city")}</p>
    </>
  )
}

export default SiteMapPage