import { ProjectType } from '@/lib/constants/projectConstants'
import { getSvg } from '@/lib/constants/skillConstants'
import Image from 'next/image'
import React from 'react'

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className='content-box w-screen sm:w-full min-[1900px]:w-[42%] min-h-[300] md:min-h-[400] mr-0 md:mr-4 mb-4 p-6 shadow-sm flex flex-nowrap rounded-sm relative'
      style={{ background: '#fff' }}
    >
      <div className='flex-none overflow-hidden w-0 sm:w-[60px] lg:w-[75px] pt-2 flex justify-center'>
        <i
          className={`fas ${project.icon} text-md sm:text-2xl lg:text-4xl lg:ml-[-8px]`}
        ></i>
      </div>
      <div>
        <span className='sm:hidden'>
          <i className={`fas ${project.icon} text-xl sm:text-2xl mr-2`}></i>
        </span>
        <h4 className='inline-block sm:block mb-2 mt-0 text-xl sm:text-2xl font-semibold'>
          {project.title}
        </h4>
        <div className='mb-2'>{project.description}</div>
        {project.website && (
          <div className='mb-0 sm:mb-2 mr-2 sm:mr-0 inline-block sm:block'>
            <i className='fas fa-globe-americas inline-block mr-2'></i>
            <a
              target='_blank'
              href={project.website}
              className='hidden sm:inline break-all'
            >
              {project.website}
            </a>
            <a
              target='_blank'
              href={project.website}
              className='inline sm:hidden'
            >
              Demo
            </a>
          </div>
        )}
        {project.code && (
          <div className='inline-block sm:block'>
            <i className='fas fa-code inline-block mr-2'></i>
            <a target='_blank' href={project.code} className='hidden sm:inline break-all'>
              {project.code}
            </a>
            <a
              target='_blank'
              href={project.website}
              className='inline sm:hidden'
            >
              Code
            </a>
          </div>
        )}
        <div className='mt-6'>
          {project.tech?.map((skill, i) => {
            const src = getSvg(skill)
            const size = 24
            return (
              <Image
                key={i}
                src={src}
                width={size}
                height={size}
                alt=''
                className='mr-2'
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
