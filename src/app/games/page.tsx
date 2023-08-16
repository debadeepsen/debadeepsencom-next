import { H1 } from '@/components/Title'
import Card from '@/components/containers/Card'
import { GAME_LIST } from '@/lib/constants/gameConstants'
import { Metadata } from 'next'
import Link from 'next/link'
import React, { ReactNode } from 'react'

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
        Enjoy a few cool games written by me (with help from
        JavaScript/TypeScript, and associated libraries)
      </p>
      <div>
        {GAME_LIST.map(game => (
          <Card key={game.slug}>
            <Link href={'/games/' + game.slug}>{game.title}</Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Games
