import { THEME_COLOR } from '@/lib/constants/commonConstants'
import { PageSectionType } from '@/types/types'
import React from 'react'

const PageSection = ({
  heading,
  children,
  sideGraphic,
  svg,
  bg
}: PageSectionType) => {
  const divClasses =
    'relative pt-10 flex w-full min-[1280px]:w-[480px] max-[1280px]:justify-center'
  return (
    <div
      className='my-10 p-3'
      style={bg ? { background: `${THEME_COLOR}11` } : undefined}
    >
      <div className='flex flex-col-reverse min-[1280px]:flex-row justify-between'>
        {sideGraphic === 'left' && (
          <div className={divClasses + ' mr-8'}>{svg}</div>
        )}
        <div className='flex-auto'>
          <h2 className='text-3xl sm:text-4xl'>{heading}</h2>
          {children}
        </div>
        {sideGraphic === 'right' && <div className={divClasses}>{svg}</div>}
      </div>
    </div>
  )
}

export default PageSection
