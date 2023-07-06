import Image from 'next/image'
import React from 'react'

const DevIcon = ({ path, alt }: { path: string; alt?: string }) => {
  const key = path === 'tailwindcss' ? 'plain' : 'original'
  const src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}/${path}-${key}.svg`
  const tooltip = alt ?? path.split('/')?.[0]?.toUpperCase() ?? ''
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
