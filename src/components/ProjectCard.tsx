import { ProjectType } from '@/lib/constants/projects'
import React from 'react'

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className='content-box w-full lg:w-[40%] min-h-[300] md:min-h-[400] mr-4 mb-4 p-6 shadow-lg flex flex-nowrap'
      style={{ background: '#fff' }}
    >
      <div className='flex-none w-[60px] pt-2 justify-center'>
        <i className={`fas ${project.icon} text-2xl lg:text-4xl`}></i>
      </div>
      <div>
        <strong className='block mb-2'>{project.title}</strong>
        <div className='mb-2'>{project.description}</div>
        {project.website && (
          <div className='mb-2'>
            <i className='fas fa-globe-americas inline-block mr-2'></i>
            <a target='_blank' href={project.website}>
              {project.website}
            </a>
          </div>
        )}
        {project.code && (
          <div>
            <i className='fas fa-code inline-block mr-2'></i>
            <a target='_blank' href={project.code}>
              {project.code}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
