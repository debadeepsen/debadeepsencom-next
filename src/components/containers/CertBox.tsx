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
  <Card>
    <center>
      <a target='_blank' href={href} data-skill={skill}>
        {/* <iframe
        src={href}
        width={200}
      />
      <br /> */}
        {text}
        <i className='fas fa-external-link-alt'></i>
      </a>
    </center>
  </Card>
)

export default CertBox
