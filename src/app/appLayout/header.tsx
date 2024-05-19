import React from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import './header.scss'
import { cityImageList, CityImageType } from '@/data/cityList'
import { continentList } from '@/data/continentList'
import { SkeletonLogic } from '@/utils/SkeletonLogic'
import ImageButton, {
  ImageButtonType,
} from '../components/ImageButton/ImageButton'

const HeaderLayout = () => {
  const t = useTranslations()

  return (
    <header>
      <div className="header-container">
        <div className="header-menu-container">
          <div className="header-icon">
            {/*
            <Image
              src="/paper-plane.png"
              alt="Main Icon"
              width="64"
              height="64"
            />*/}
          </div>
          <div className="header-menu">
            <ul>
              <li><Link href="/"><span>Home</span></Link></li>
              {continentList.map((continent) => {
                return (
                  <li key={continent}>
                    <span>{t(continent)}</span>
                    <div className="header-menu-dropdown">
                      <div className="menu-drop-down-item-container">
                        {SkeletonLogic(cityImageList, cityImageList.length).map(
                          (item: CityImageType | undefined, index: number) => {
                            let temp: ImageButtonType | null = null
                            if (item !== undefined) {
                              temp = {
                                linkLabel: t(item.name),
                                link: `/city/${item.name}`,
                                image: `/city-image/${item.imagePath}`,
                              }
                            }
                            return (
                              <div key={index} className="menu-drop-down-item">
                                <ImageButton item={temp}></ImageButton>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </li>
                )
              })}
              <div className="glass-bg"></div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderLayout
