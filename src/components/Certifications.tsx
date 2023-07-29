/* eslint-disable @next/next/no-img-element */
'use client'

import { PageSectionType } from '@/types/types'
import PageSection from './containers/PageSection'
import CertificationSVG from './SVGs/CertificationSVG'
import CertBox from './containers/CertBox'
import { useAppSelector } from '@/store/hooks'
import { RootState } from '@/store'
import { ColorModes } from '@/lib/constants/colorModeConstants'

const Certifications = ({ heading, bg }: PageSectionType) => {
  const colorModeValue = useAppSelector(
    (state: RootState) => state.colorMode.value
  )

  return (
    <PageSection
      heading={heading}
      bg={bg}
      sideGraphic='right'
      svg={<CertificationSVG />}
    >
      <div className='flex flex-col md:flex-row'>
        <div className='shadow-xs p-4'>
          <h3>Scrum Alliance</h3>
          <div
            className='block p-4 my-4 shadow-md w-fit text-center'
            style={{ background: ColorModes[colorModeValue].cardBg }}
          >
            <a target='_blank' href='https://bcert.me/sofciruoh'>
              <img
                src='https://bcert.me/bc/html/img/badges/generated/badge-7224.png'
                alt='Certified Scrum Product Owner (CSPO) badge'
                className='w-[128px]'
              />
              <div>
                Certified Scrum Product Owner (CSPO)
                <i className='fas fa-external-link-alt'></i>
              </div>
            </a>
          </div>
        </div>
        <div className='ml-0 md:ml-10 shadow-xs p-4'>
          <h3 className='mt-8 md:mt-4'>HackerRank</h3>
          <div className='hr-row block sm:flex md:flex-col xl:flex-row'>
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
        </div>
      </div>
    </PageSection>
  )
}

export default Certifications
