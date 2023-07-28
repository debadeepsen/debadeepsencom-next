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
    <a target='_blank' href={href} data-skill={skill}>
      <iframe
        src='https://www.hackerrank.com/certificates/iframe/59268139df40'
        width={120}
      />
      <br />
      {text}
    </a>
  </Card>
)

export default CertBox
