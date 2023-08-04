/* eslint-disable @next/next/no-img-element */
import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import Image from 'next/image'
import React from 'react'

const Photography = () => {
  const dir = '/img/photography/Travel/webp/'
  const files = [
    'beach1.webp',
    'beach2.webp',
    'dc1.webp',
    'dc2.webp',
    'dc3.webp',
    'edinburgh1.webp',
    'germany1.webp',
    'london1.webp',
    'london2.webp',
    'london3.webp',
    'paris1.webp',
    'pisa1.webp',
    'raleigh1.webp',
    'raleigh2.webp',
    'stonehenge1.webp',
    'stonehenge2.webp'
  ]
  const imgClasses =
    'cursor-default m-0 w-full h-[200px] md:w-[360px] h-[360px] xl:w-[400px] xl:h-[400px] object-cover shadow-md z-1 transition-all hover:border-2'
  return (
    <>
      <H1>Photography</H1>
      <div className='flex flex-wrap justify-center'>
        {files.map(image => (
          <Card
            key={image}
            classList='sm:mr-4 mb-4 p-[8px] pb-[4px] hover:z-5 hover:border-2'
          >
            <Image
              width='1000'
              height='1000'
              alt={image.slice(0, -6)}
              src={dir + image}
              className={imgClasses}
            />
          </Card>
        ))}
      </div>
    </>
  )
}

export default Photography
