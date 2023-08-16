import HackerRankSVG from '../SVGs/HackerRankSVG'
import Card from './Card'

const CertBox = ({
  href,
  skill,
  text
}: {
  href: string
  skill: string
  text: string
}) => (
  <Card classList='w-full md:w-fit'>
    <center>
      <a target='_blank' href={href} data-skill={skill}>
        {/* TODO: make this a prop */}
        <HackerRankSVG />
        <br/>
        {text}
        <i className='fas fa-external-link-alt'></i>
      </a>
    </center>
  </Card>
)

export default CertBox
