'use client'

import PhotoGrid from '@/components/PhotoGrid'
/* eslint-disable @next/next/no-img-element */
import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import { ColorModes } from '@/lib/constants/colorModeConstants'
import { photosDir, photosToShow } from '@/lib/constants/photosContants'
import { RootState } from '@/store'
import { useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import { useState } from 'react'

export const metadata = {
  title: 'Photography | Debadeep Sen',
  openGraph: {
    title: 'Photography | Debadeep Sen'
  }
}

const Photography = () => (
  <div>
    <PhotoGrid />
  </div>
)

export default Photography
