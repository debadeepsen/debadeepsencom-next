import { PageSectionType } from '@/types/types'
import React from 'react'
import PageSection from './containers/PageSection'
import Image from 'next/image'
import Card from './containers/Card'
import CertificationSVG from './SVGs/CertificationSVG'

const CertBox = ({
  href,
  skill,
  text
}: {
  href: string
  skill: string
  text: string
}) => (
  <Card>
    <a target='_blank' href={href} data-skill={skill}>
      {text}
    </a>
  </Card>
)

const Certifications = ({ heading }: PageSectionType) => {
  return (
    <PageSection
      heading={heading}
      sideGraphic='right'
      svg={<CertificationSVG />}
    >
      <h3>Scrum Alliance</h3>
      <div className='block bg-white p-4 my-4 shadow-sm'>
        <a target='_blank' href='https://bcert.me/sofciruoh'>
          <img
            src='https://bcert.me/bc/html/img/badges/generated/badge-7224.png'
            alt='Certified Scrum Product Owner (CSPO) badge'
            className='w-[128px]'
          />
          <div>Certified Scrum Product Owner (CSPO)</div>
        </a>
      </div>
      <h3 className='mt-8'>HackerRank</h3>
      <div className='hr-row'>
        <CertBox
          href='https://www.hackerrank.com/certificates/59268139df40'
          skill='C%23'
          text='C# (Basic)'
        />

        <CertBox
          href='https://www.hackerrank.com/certificates/04a576b2b7b3'
          skill='CSS'
          text='CSS'
        />

        <CertBox
          href='https://www.hackerrank.com/certificates/562e3e22aa1a'
          skill='React'
          text='React (Basic)'
        />
      </div>
    </PageSection>
  )
}

export default Certifications
