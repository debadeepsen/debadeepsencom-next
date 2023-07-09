import { PageSectionType } from '@/types/types'
import React from 'react'

const PageSection = ({
  heading,
  children,
  hr = true,
  sideGraphic,
  svg
}: PageSectionType) => {
  const divClasses = 'relative pt-10 flex w-[400px] items-center justify-center'
  return (
    <div className='my-10'>
      {/* {hr && <div className='separator'></div>} */}
      <div className='flex flex-col-reverse sm:flex-row justify-between'>
        {sideGraphic === 'left' && <div className={divClasses}>{svg}</div>}
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
