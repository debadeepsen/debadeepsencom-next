import PhotoGridWrapper from '@/components/containers/PhotoGridWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography | Debadeep Sen',
  openGraph: {
    title: 'Photography | Debadeep Sen',
    description: 'Photography by Debadeep Sen'
  },
  alternates: {
    canonical: 'https://debadeepsen.com/photography'
  }
}

const Photography = () => (
  <div>
    <PhotoGridWrapper />
  </div>
)

export default Photography
