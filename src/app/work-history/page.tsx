import { Metadata } from 'next'
import Timeline from '@/components/Timeline'

export const metadata: Metadata = {
  title: 'Work Experience | Debadeep Sen',
  description: 'Professional work experience and career history of Debadeep Sen',
  openGraph: {
    title: 'Work Experience | Debadeep Sen',
    description: 'Professional work experience and career history of Debadeep Sen',
    type: 'profile',
  },
}

const TimelinePage = () => {
  return (
    <div className='min-h-screen'>
      <header className='py-4 border-b'>
        <h1 className='font-extralight text-5xl sm:text-6xl lg:text-7xl text-center'>
          Career History
        </h1>
      </header>
      <main className='max-w-4xl mx-auto'>
        <Timeline />
      </main>
    </div>
  )
}

export default TimelinePage
