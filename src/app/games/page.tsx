import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import { GAME_LIST } from '@/lib/constants/gameConstants'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Games | Debadeep Sen',
  openGraph: {
    title: 'Games | Debadeep Sen',
    description: 'Games by Debadeep Sen'
  },
  alternates: {
    canonical: 'https://debadeepsen.com/games'
  }
}

const Games = () => {
  return (
    <div className='w-full lg:w-[800px] xl:w-[1024px] min-[2000px]:w-[80%] mx-auto'>
      <H1>Games</H1>
      <p>
        Enjoy a few simple games written by me (with help from
        JavaScript/TypeScript, and associated libraries)
      </p>
      <div>
        {GAME_LIST.map(game => (
          <Card key={game.slug} classList='flex flex-col sm:flex-row justify-center sm:justify-start items-center max-w-full lg:max-w-[50%]'>
            <div className='w-[120px] md:w-auto'>
              {
                game.icon
              }
            </div>
            <div className='ml-0 sm:ml-8'>
              {' '}
              <Link href={'/games/' + game.slug}>
                <h2>{game.title}</h2>
              </Link>
              <p>{game.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Games
