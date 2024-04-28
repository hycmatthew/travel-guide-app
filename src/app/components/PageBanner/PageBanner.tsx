import React from 'react'
import Image from 'next/image'
import Skeleton from '@mui/material/Skeleton'
import './PageBanner.scss'
import CommonButton from '../CommonButton/CommonButton'

export interface PageBannerType {
  header: string
  desc: string
  linkLabel: string
  link: string
  image: string
}

interface PageBannerProps {
  item?: PageBannerType | null
}

const PageBanner = (data: PageBannerProps) => {
  if (data.item != null) {
    return (
      <div className="page-banner-container">
        <div className="image-block">
          <Image
            src={data.item.image}
            width={1000}
            height={480}
            alt={data.item.linkLabel}
          />
        </div>
        <div className="content-block">
          <h3>{data.item.header}</h3>
          <p>{data.item.desc}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="page-banner-container">
        <div className="image-block">
          <Skeleton
            animation="wave"
            className="skeleton-img"
            variant="rectangular"
          />
        </div>
      </div>
    )
  }
}

export default PageBanner
