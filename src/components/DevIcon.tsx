import { getSvg } from '@/lib/constants/skillConstants'
import Image from 'next/image'
import React from 'react'

const DevIcon = ({ skill, alt }: { skill: string; alt?: string }) => {
  const src = getSvg(skill)
  const tooltip = alt ?? skill.split('/')?.[0]?.toUpperCase() ?? ''
  const size = 60

  return (
    <Image
      src={src}
      width={size}
      height={size}
      alt={tooltip}
      title={tooltip}
      style={{ marginRight: 6 }}
    />
  )
}

export default DevIcon
