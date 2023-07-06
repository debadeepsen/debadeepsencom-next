import { PageSectionType } from '@/types/types'
import React from 'react'

const PageSection = ({ heading, children }: PageSectionType) => {
  console.log(heading)
  return (
    <div>
      <div className='separator'></div>
      <h2>{heading}</h2>
      {children}
    </div>
  )
}

export default PageSection
