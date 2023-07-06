import { PageSectionType } from '@/types/types'
import React from 'react'
import PageSection from './containers/PageSection'
import Image from 'next/image'
import { DELIMITER, skills } from '@/lib/constants/skillConstants'
import DevIcon from './DevIcon'

const Skills = ({ heading }: PageSectionType) => {
  return (
    <PageSection heading={heading}>
      <div className='icons'>
        <div className='mt-2'>
          {skills.map(skill => {
            let [path, alt] = skill.split(DELIMITER)
            if (alt) return <DevIcon key={path} path={path} alt={alt} />
            return <DevIcon key={path} path={path} />
          })}
        </div>
      </div>
    </PageSection>
  )
}

export default Skills
