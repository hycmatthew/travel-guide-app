'use client'

import { useEffect } from 'react'
import { Grid } from '@mui/material'

import {
  selectFreeGameDataList,
  freeGameDataAsyn,
} from '../../lib/features/freeGameData/gameDataSlice'
import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import ImageBox, { ImageBoxType } from '../components/ImageBox/ImageBox'
import { SkeletonLogic } from '@/utils/SkeletonLogic'
import FreeGameType from '@/constant/gameTypes/FreeGameType'
import HeroBanner, { HeroBannerType } from '../components/HeroBanner/HeroBanner'


export default function Home() {
  const dispatch = useAppDispatch()
  const freeGameData = useAppSelector(selectFreeGameDataList)

  useEffect(() => {
    dispatch(freeGameDataAsyn())
  }, [])

  return (
    <>
      <Grid container spacing={2}>
        {SkeletonLogic(freeGameData, 1).map(
          (item: FreeGameType | undefined, index: number) => {
            let temp: HeroBannerType | null = null
            if (item !== undefined) {
              temp = {
                header: item.Name,
                desc: item.Desc,
                link: item.Path,
                linkLabel: 'Link',
                image: item.ImagePath,
              }
            }
            return (
              <Grid item xs={12} key={index}>
                <HeroBanner item={temp}></HeroBanner>
              </Grid>
            )
          }
        )}
      </Grid>
      <div className="row">
        <Grid container spacing={2} columns={{ xs: 4, sm: 12 }}>
          {SkeletonLogic(freeGameData, 3).map(
            (item: FreeGameType | undefined, index: number) => {
              let temp: ImageBoxType | null = null
              if (item !== undefined) {
                temp = {
                  header: item.Name,
                  desc: item.Desc,
                  link: item.Path,
                  linkLabel: 'Link',
                  image: item.ImagePath,
                }
              }
              return (
                <Grid item xs={4} key={index}>
                  <ImageBox item={temp}></ImageBox>
                </Grid>
              )
            }
          )}
        </Grid>
      </div>
    </>
  )
}
