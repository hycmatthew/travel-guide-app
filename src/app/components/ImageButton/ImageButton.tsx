import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Image from 'next/image'
import { Link } from '@/navigation'
import './ImageButton.scss'

export interface ImageButtonType {
  linkLabel: string
  link: string
  image: string
}

interface ImageButtonProps {
  item?: ImageButtonType | null
}

const ImageButton = (data: ImageButtonProps) => {
  if (data.item != null) {
    return (
      <div className="image-button-container">
        <Link href={data.item.link}>
          <div className="image-button">
            <Image
              src={data.item.image}
              width={160}
              height={80}
              alt={data.item.linkLabel}
            />
          </div>
          <div className="content-block">{data.item.linkLabel}</div>
        </Link>
      </div>
    )
  } else {
    return (
      <div className="image-button-container">
        <div className="image-button">
          <Skeleton
            animation="wave"
            className="skeleton-img"
            variant="rectangular"
            height={160}
          />
        </div>
        <div className="content-block">
          <Skeleton
            animation="wave"
            className="skeleton-a"
            variant="text"
            sx={{ fontSize: '1rem' }}
          />
        </div>
      </div>
    )
  }
}

export default ImageButton
