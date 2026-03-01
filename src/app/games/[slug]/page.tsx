import { H1 } from '@/components/Title'
import MemoryGame from '@/components/games/memory-game/MemoryGame'
import WordGame from '@/components/games/word-game/WordGame'
import { GAME_LIST, GAME_SLUGS } from '@/lib/constants/gameConstants'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  if (params.slug === GAME_SLUGS.WORD_GAME) {
    return {
      title: 'Guess the word | Debadeep Sen',
      description: 'A word-guessing game',
      keywords:
        'words,game,wordgame,hangman,javascript,typescript,javascriptgame,typescriptgame'
    }
  }

  if (params.slug === GAME_SLUGS.MEMORY_GAME) {
    return {
      title: 'Memory game | Debadeep Sen',
      description: 'A card-matching memory game',
      keywords:
        'memory,memorygame,cardgame,puzzle,matching,javascript,typescript'
    }
  }

  return {
    title: 'Game not found | Debadeep Sen'
  }
}

const Game = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const game = GAME_LIST.find(g => g.slug === slug)
  if (!game) {
    notFound()
  }

  return (
    <div className='w-full lg:w-[800px] xl:w-[1200px] mx-auto relative'>
      <H1>{game?.title}</H1>
      {slug === GAME_SLUGS.WORD_GAME && <WordGame />}
      {slug === GAME_SLUGS.MEMORY_GAME && <MemoryGame />}
    </div>
  )
}

export default Game
