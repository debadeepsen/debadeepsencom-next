import { PageSectionType } from '@/types/types'
import React from 'react'
import PageSection from './PageSection'
import Image from 'next/image'

const DevIcon = ({ path, alt }: { path: string; alt?: string }) => {
  const key = path === 'tailwindcss' ? 'plain' : 'original'
  const src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}/${path}-${key}.svg`
  const tooltip = alt ?? path.split('/')?.[0]?.toUpperCase() ?? ''

  return (
    <Image
      src={src}
      width={32}
      height={32}
      alt={tooltip}
      title={tooltip}
      style={{ marginRight: 6 }}
    />
  )
}

const DELIMITER = ';'
const paths = [
  'html5',
  'css3',
  'javascript;JavaScript',
  'csharp;C#',
  'nodejs;Node.JS',
  'vuejs;Vue',
  'react;React',
  'angularjs;Angular',
  'mysql;MySQL',
  'bootstrap;Bootstrap',
  'tailwindcss;Tailwind',
  'git;Git'
]

const Skills = ({ heading }: PageSectionType) => {
  return (
    <PageSection heading={heading}>
      <div className='icons'>
        <div style={{ marginTop: 12 }}>
          {paths.map((p) => {
            let [path, alt] = p.split(DELIMITER)
            if (alt) return <DevIcon key={path} path={path} alt={alt} />
            return <DevIcon key={path} path={path} />
          })}
        </div>
      </div>
    </PageSection>
  )
}

export default Skills
