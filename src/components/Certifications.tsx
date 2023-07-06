import { PageSectionType } from '@/types/types'
import React from 'react'
import PageSection from './containers/PageSection'
import Image from 'next/image'

const CertBox = ({
  href,
  skill,
  text
}: {
  href: string
  skill: string
  text: string
}) => (
  <a target='_blank' href={href} data-skill={skill}>
    {text}
  </a>
)

const Certifications = ({ heading }: PageSectionType) => {
  return (
    <PageSection heading={heading}>
      <h3>Scrum Alliance</h3>
      <a target='_blank' href='https://bcert.me/sofciruoh'>
        {/* <Image
          src='img/cspo-badge-7224.png'
          alt='Certified Scrum Product Owner (CSPO) badge'
          className='badge'
          width={128}
          height={128}
        /> */}
        <span>Certified Scrum Product Owner (CSPO)</span>
      </a>
      <h3>HackerRank</h3>
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
