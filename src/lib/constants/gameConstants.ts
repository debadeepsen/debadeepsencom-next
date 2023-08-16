import { ReactNode } from 'react'

export type GameInfo = {
  icon?: ReactNode
  title?: string
  description?: string
  slug: string
}

export const GAME_SLUGS = Object.freeze({
  WORD_GAME: 'word-game'
})

export const GAME_LIST: GameInfo[] = [
  {
    icon: undefined,
    title: 'Word-guessing game',
    slug: GAME_SLUGS.WORD_GAME
  }
]
