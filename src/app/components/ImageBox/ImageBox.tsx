import React from 'react'
import Image from 'next/image'
import Skeleton from '@mui/material/Skeleton'
import './ImageBox.scss'
import CommonButton from '../CommonButton/CommonButton'

export interface ImageBoxType{
  header: string
  desc: string
  linkLabel: string
  link: string
  image: string
}

interface ImageBoxProps {
  item?: ImageBoxType | null
}

const ImageBox = (data: ImageBoxProps) => {

  if(data.item != null){
    return(
      <div className="image-block-container">
        <div className="image-block">
          <Image
            src={data.item.image}
            width={500}
            height={300}
            alt={data.item.header}
          />
        </div>
        <div className="content-block">
          <div className='text-container'>
            <h3>{data.item.header}</h3>
            <p>{data.item.desc}</p>
          </div>
          
          <CommonButton link={data.item.link} linkLabel={data.item.linkLabel}></CommonButton>
        </div>
      </div>
    )
  }else{
    return(
      <div className="image-block-container">
        <div className="image-block">
          <Skeleton animation="wave" className='skeleton-img' variant="rectangular" height={160}/>
        </div>
        <div className="content-block">
          <Skeleton animation="wave" className='skeleton-h3' variant="text" sx={{ fontSize: '1.5rem' }} />
          <Skeleton animation="wave" className='skeleton-p' variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton animation="wave" className='skeleton-p' variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton animation="wave" className='skeleton-p' variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton animation="wave" className='skeleton-p' variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton animation="wave" className='skeleton-a' variant="text" sx={{ fontSize: '1rem' }} />
        </div>
      </div>
    )
  }
}

export default ImageBox
