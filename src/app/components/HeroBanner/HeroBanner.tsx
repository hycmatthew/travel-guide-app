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
          <CommonButton link={data.item.link} linkLabel={data.item.linkLabel}></CommonButton>
        </div>
        <div className="image-block">
          <Image
            src={data.item.image}
            width={1000}
            height={450}
            alt={data.item.linkLabel}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className="image-banner-container">
        <div className="content-block">
          <Skeleton
            animation="wave"
            className="skeleton-h3"
            variant="text"
            sx={{ fontSize: '1.5rem' }}
          />
          <Skeleton
            animation="wave"
            className="skeleton-p"
            variant="text"
            sx={{ fontSize: '1rem' }}
          />
          <Skeleton
            animation="wave"
            className="skeleton-p"
            variant="text"
            sx={{ fontSize: '1rem' }}
          />
          <Skeleton
            animation="wave"
            className="skeleton-p"
            variant="text"
            sx={{ fontSize: '1rem' }}
          />
          <Skeleton
            animation="wave"
            className="skeleton-p"
            variant="text"
            sx={{ fontSize: '1rem' }}
          />
          <Skeleton
            animation="wave"
            className="skeleton-a"
            variant="text"
            sx={{ fontSize: '1rem' }}
          />
        </div>
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
