import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import './header.scss'
import { cityImageList, CityImageType } from '@/data/cityList'
import { continentList } from '@/data/continentList'
import { SkeletonLogic } from '@/utils/SkeletonLogic'
import { Grid } from '@mui/material'
import ImageButton, {
  ImageButtonType,
} from '../components/ImageButton/ImageButton'

const HeaderLayout = () => {
  const t = useTranslations()

  return (
    <header>
      <div className="header-container row">
        <div className="header-menu-container">
          <div className="header-icon">
            <Image
              src="/paper-plane.png"
              alt="Main Icon"
              width="64"
              height="64"
            />
          </div>
          <div className="header-menu">
            <ul>
              {continentList.map((continent) => {
                return (
                  <li>
                    <span>{t(continent)}</span>
                    <div className="header-menu-dropdown">
                      <div className="menu-drop-down-item-container">
                        <Grid container spacing={1}>
                          {SkeletonLogic(
                            cityImageList,
                            cityImageList.length
                          ).map(
                            (
                              item: CityImageType | undefined,
                              index: number
                            ) => {
                              let temp: ImageButtonType | null = null
                              if (item !== undefined) {
                                temp = {
                                  linkLabel: t(item.name),
                                  link: `/city/${item.imagePath}`,
                                  image: `/city-image/${item.imagePath}`,
                                }
                              }
                              return (
                                <Grid
                                  item
                                  xs={2}
                                  key={index}
                                  className="menu-drop-down-item"
                                >
                                  <ImageButton item={temp}></ImageButton>
                                </Grid>
                              )
                            }
                          )}
                        </Grid>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderLayout
