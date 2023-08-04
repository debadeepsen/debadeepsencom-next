'use client'

/* eslint-disable @next/next/no-img-element */
import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import { ColorModes } from '@/lib/constants/colorModeConstants'
import { photosDir, photosToShow } from '@/lib/constants/photosContants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import { useState } from 'react'

const Photography = () => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )
  const imageClasses =
    'thumb cursor-pointer m-0 w-full h-[200px] md:w-[360px] h-[360px] xl:w-[400px] xl:h-[400px] object-cover shadow-md z-1 transition-all hover:shadow-xl hover:rounded '

  const [buttonOpacity, setButtonOpacity] = useState(0)
  const [clickedImage, setClickedImage] = useState<
    (EventTarget & HTMLImageElement) | null
  >(null)

  const imageClicked = () => {
    if (!clickedImage) return

    setButtonOpacity(1)
    if (clickedImage.parentElement) {
      clickedImage.parentElement.style.left = '0'
      clickedImage.parentElement.style.top = '0'
      clickedImage.parentElement.style.position = 'fixed'
      clickedImage.parentElement.style.width = '100vw'
      clickedImage.parentElement.style.height = '100vh'
      clickedImage.parentElement.style.padding = '0'
      clickedImage.parentElement.style.zIndex = '50'
    }
    clickedImage.classList.remove('thumb')
    clickedImage.style.width = '100vw'
    clickedImage.style.height = '100vh'
    clickedImage.style.objectFit = 'contain'
  }

  const closeClicked = () => {
    if (!clickedImage) return

    setButtonOpacity(0)
    if (clickedImage.parentElement) {
      clickedImage.parentElement.style.left = 'auto'
      clickedImage.parentElement.style.top = 'auto'
      clickedImage.parentElement.style.position = 'auto'
      clickedImage.parentElement.style.width = 'auto'
      clickedImage.parentElement.style.height = 'auto'
      clickedImage.parentElement.style.padding = 'auto'
      clickedImage.parentElement.style.zIndex = 'auto'
    }
    clickedImage.classList.add('thumb')
    clickedImage.style.width = 'auto'
    clickedImage.style.height = 'auto'
    clickedImage.style.objectFit = 'auto'
  }

  return (
    <>
      <button
        className={
          'flex justify-center items-center w-[36px] h-[36px] bg-slate-800/20 rounded-full fixed top-[4px] right-[4px] border-0 z-[60] cursor-pointer transition-all'
        }
        style={{ opacity: buttonOpacity }}
        onClick={() => closeClicked()}
      >
        <i
          className='fas fa-times'
          style={{ fontSize: 20, color: ColorModes[colorModeValue].color }}
        ></i>
      </button>
      <H1>Photography</H1>
      <div className='flex flex-wrap justify-center'>
        {photosToShow.map(image => (
          <Card
            key={image}
            classList='sm:mr-4 mb-4 p-[8px] pb-[4px] flex justify-center items-center'
          >
            <img
              alt={image.slice(0, -6)}
              src={photosDir + image}
              className={imageClasses}
              onClick={e => {
                setClickedImage(e.currentTarget)
                imageClicked()
              }}
            />
          </Card>
        ))}
      </div>
    </>
  )
}

export default Photography
