import React from 'react'
import Image from 'next/image'
import Skeleton from '@mui/material/Skeleton'
import './HeroBanner.scss'
import CommonButton from '../CommonButton/CommonButton'

export interface HeroBannerType {
  header: string
  desc: string
  linkLabel: string
  link: string
  image: string
}

interface HeroBannerProps {
  item?: HeroBannerType | null
}

const HeroBanner = (data: HeroBannerProps) => {
  if (data.item != null) {
    return (
      <div className="image-banner-container">
        <div className="content-block">
          <h3>{data.item.header}</h3>
          <p>{data.item.desc}</p>
          <CommonButton buttonType="text" link={data.item.link} linkLabel={data.item.linkLabel}></CommonButton>
        </div>
        <div className="image-block">
          <Image
            src={data.item.image}
            width={1000}
            height={600}
            alt={data.item.linkLabel}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className="image-banner-container">
        <div className="image-block">
          <Skeleton
            animation="wave"
            className="skeleton-img"
            variant="rectangular"
            height={160}
          />
        </div>
      </div>
    )
  }
}

export default HeroBanner
