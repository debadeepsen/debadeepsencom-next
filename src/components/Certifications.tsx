import { PageSectionType } from '@/types/types'
import PageSection from './containers/PageSection'
import CertificationSVG from './SVGs/CertificationSVG'
import CertBox from './containers/CertBox'

const Certifications = ({ heading, bg }: PageSectionType) => {
  return (
    <PageSection
      heading={heading}
      bg={bg}
      sideGraphic='right'
      svg={<CertificationSVG />}
    >
      <div className='flex'>
        <div>
          <h3>Scrum Alliance</h3>
          <div className='block bg-white p-4 my-4 shadow-sm w-fit'>
            <a target='_blank' href='https://bcert.me/sofciruoh'>
              <img
                src='https://bcert.me/bc/html/img/badges/generated/badge-7224.png'
                alt='Certified Scrum Product Owner (CSPO) badge'
                className='w-[128px]'
              />
              <div>Certified Scrum Product Owner (CSPO)</div>
            </a>
          </div>
        </div>
        <div className='ml-0 sm:ml-10'>
          <h3 className='mt-8 sm:mt-4'>HackerRank</h3>
          <div className='hr-row block sm:flex'>
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
