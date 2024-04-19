'use client'

import { useEffect } from 'react';
import { Grid } from "@mui/material"

import { selectFreeGameDataList, freeGameDataAsyn } from '../../lib/features/freeGameData/gameDataSlice';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import ImageBox, { ImageBoxType } from '../components/ImageBox/ImageBox';
import ImageButton, { ImageButtonType } from '../components/ImageButton/ImageButton';
import { SkeletonLogic } from '@/utils/SkeletonLogic';
import FreeGameType from '@/constant/gameTypes/FreeGameType';

export default function Home() {
  const dispatch = useAppDispatch();
  const freeGameData = useAppSelector(selectFreeGameDataList)

  useEffect(() => {
    dispatch(freeGameDataAsyn())
  }, []);

  return (
    <>
      <Grid container spacing={2}>
      {
        SkeletonLogic(freeGameData, 3).map((item: FreeGameType | undefined, index: number) => {
          let temp: ImageBoxType | null = null
          if(item !== undefined){
            temp = {
              header: item.Name,
              desc: item.Desc,
              link: item.Path,
              linkLabel: "Link",
              image: item.ImagePath
            }
          }
          return (
            <Grid item xs={4} key={index}>
              <ImageBox item={temp}></ImageBox>
            </Grid>
          )
        })
      }
      </Grid>

      <Grid container spacing={2}>
      {
        SkeletonLogic(freeGameData, 3).map((item: FreeGameType | undefined, index: number) => {
          let temp: ImageButtonType | null = null
          if(item !== undefined){
            temp = {
              link: item.Path,
              linkLabel: "Link",
              image: item.ImagePath
            }
          }
          return (
            <Grid item xs={2} key={index}>
              <ImageButton item={temp}></ImageButton>
            </Grid>
          )
        })
      }
      </Grid>
    </>
  )
}
