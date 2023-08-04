/* eslint-disable @next/next/no-img-element */
import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import React from 'react'

const Photography = () => {
  const dir = '/img/photography/Travel/'
  const files = [
    'beach1.jpg',
    'beach2.jpg',
    'dc1.jpg',
    'dc2.jpg',
    'dc3.jpg',
    'edinburgh1.jpg',
    'germany1.jpg',
    'london1.jpg',
    'london2.jpg',
    'london3.jpg',
    'paris1.jpg',
    'pisa1.jpg',
    'raleigh1.jpg',
    'raleigh2.jpg',
    'stonehenge1.jpg',
    'stonehenge2.jpg'
  ]
  const imgClasses =
    'cursor-default m-0 w-full h-[200px] md:w-[360px] h-[360px] xl:w-[400px] xl:h-[400px] object-cover shadow-md z-1 transition-all hover:border-2'
  return (
    <>
      <H1>Photography</H1>
      <div className='flex flex-wrap justify-center'>
        {files.map(image => (
          <Card key={image} classList='sm:mr-4 mb-4 p-[8px] pb-[4px] hover:z-5 hover:border-2'>
            <img
              alt={image.slice(0, -5)}
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
