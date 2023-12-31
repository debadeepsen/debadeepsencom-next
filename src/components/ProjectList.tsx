import { PageSectionType } from '@/types/types'
import React from 'react'
import PageSection from './containers/PageSection'
import projects from '@/lib/constants/projectConstants'
import ProjectCard from './ProjectCard'
import ProjectsSVG from './SVGs/ProjectsSVG'

const ProjectList = ({ heading }: PageSectionType) => {
  return (
    <PageSection heading={heading} sideGraphic='right' svg={<ProjectsSVG />}>
      <div className='flex flex-wrap'>
        {projects.map((p, i) => {
          return <ProjectCard key={i} project={p} />
        })}
      </div>
    </PageSection>
  )
}

export default ProjectList
