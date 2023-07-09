import { PageSectionType } from '@/types/types'
import React from 'react'
import PageSection from './containers/PageSection'
import { DELIMITER, skills } from '@/lib/constants/skillConstants'
import DevIcon from './DevIcon'
import CodeSVG from './SVGs/CodeSVG'

const Skills = ({ heading }: PageSectionType) => {
  return (
    <PageSection heading={heading} sideGraphic='left' svg={<CodeSVG />}>
      <div className='icons'>
        {skills.map(fullSkill => {
          const [skill, alt] = fullSkill.split(DELIMITER)
          if (alt) return <DevIcon key={skill} skill={skill} alt={alt} />
          return <DevIcon key={skill} skill={skill} />
        })}
      </div>
    </PageSection>
  )
}

export default Skills
