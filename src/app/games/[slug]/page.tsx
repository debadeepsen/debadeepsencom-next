import { H1 } from '@/components/Title'
import WordGame from '@/components/games/WordGame'
import { GAME_LIST, GAME_SLUGS } from '@/lib/constants/gameConstants'
import React from 'react'

const Game = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const game = GAME_LIST.find(g => g.slug === slug)

  return (
    <div className='w-full lg:w-[800px] xl:w-[1200px] mx-auto relative'>
      <H1>{game?.title}</H1>
      {slug === GAME_SLUGS.WORD_GAME && <WordGame />}
    </div>
  )
}

export default Game
