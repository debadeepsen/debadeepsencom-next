import { PageSectionType } from '@/types/types'
import React from 'react'
import PageSection from './containers/PageSection'
import projects from '@/lib/constants/projects'
import ProjectCard from './ProjectCard'

const ProjectList = ({ heading }: PageSectionType) => {
  return (
    <PageSection heading={heading}>
      <div className='flex flex-wrap'>
        {projects.map((p) => {
          return <ProjectCard key={p.id.toString()} project={p} />
        })}
      </div>
    </PageSection>
  )
}

export default ProjectList
