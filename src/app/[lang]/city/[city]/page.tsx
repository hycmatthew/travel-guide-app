import React from 'react'
import { useTranslations } from 'next-intl'
import PageBanner, { PageBannerType } from '@/app/components/PageBanner/PageBanner'
import FreeGameType from '@/constant/gameTypes/FreeGameType'
import { SkeletonLogic } from '@/utils/SkeletonLogic'
import { Grid } from '@mui/material'
import { MockCityData, MockCityDataType } from '@/data/mockData'

interface CityInfoPageProps {
  params: { city: string }
}

const CityInfoPage = ({ params: { city } }: CityInfoPageProps) => {
  const t = useTranslations()

  return (
    <>
      <div>
        {SkeletonLogic([MockCityData], 1).map(
          (item: MockCityDataType | undefined, index: number) => {
            let temp: PageBannerType | null = null
            if (item !== undefined) {
              temp = {
                header: item.title,
                desc:  "",
                image: item.heroBanner,
              }
            }
            return (
              <Grid item xs={12} key={index}>
                <PageBanner item={temp}></PageBanner>
              </Grid>
            )
          }
        )}
      </div>
      <h1>Test</h1>
      <p>{t(city)}</p>
    </>
  )
}

export default CityInfoPage
