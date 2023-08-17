// 'use client'

/* eslint-disable @next/next/no-img-element */
import { ColorModes } from '@/lib/constants/colorModeConstants'
import { photosDir, photosToShow } from '@/lib/constants/photosContants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import React, { useState } from 'react'
import { H1 } from './Title'
import Card from './containers/Card'

const PhotoGrid = () => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )
  const imageClasses =
    'm-0 w-full h-[200px] md:w-[360px] h-[360px] xl:w-[400px] xl:h-[400px] object-cover shadow-md z-1 transition-all hover:shadow-xl hover:rounded '

  const [clickedImage, setClickedImage] = useState<string | null>(null)

  const getClickedCardClass = (image: string) =>
    clickedImage === image ? 'clicked-card' : ''

  const getClickedImageClass = (image: string) =>
    clickedImage === image
      ? 'clicked-image cursor-default'
      : 'thumb cursor-pointer'

  return (
    <>
      <button
        aria-label='Close image'
        className={
          'flex justify-center items-center w-[36px] h-[36px] bg-slate-800/20 rounded-full fixed top-[4px] right-[4px] border-0 z-[60] cursor-pointer transition-all'
        }
        style={{ opacity: clickedImage ? 1 : 0 }}
        onClick={() => setClickedImage(null)}
      >
        <i
          className='fas fa-times'
          style={{ fontSize: 20, color: ColorModes[colorModeValue].color }}
        ></i>
      </button>
      <H1>Photography</H1>
      <div className='flex flex-wrap justify-center'>
        {photosToShow.map(file => (
          <Card
            key={file.filename}
            classList={
              'relative sm:mr-4 mb-4 p-[8px] pb-[4px] flex justify-center items-center ' +
              getClickedCardClass(file.filename)
            }
          >
            <img
              alt={file.caption}
              src={photosDir + file.filename}
              className={imageClasses + getClickedImageClass(file.filename)}
              onClick={() => setClickedImage(file.filename)}
              loading='lazy'
            />
            <div className='caption'>{file.caption}</div>
          </Card>
        ))}
      </div>
    </>
  )
}

export default PhotoGrid
