import { PageSectionType } from '@/types/types'
import React from 'react'

const PageSection = ({ heading, children, hr = true }: PageSectionType) => {
  return (
    <div>
      {hr && <div className='separator'></div>}
      <h2 className='text-3xl sm:text-4xl'>{heading}</h2>
      {children}
    </div>
  )
}

export default PageSection
