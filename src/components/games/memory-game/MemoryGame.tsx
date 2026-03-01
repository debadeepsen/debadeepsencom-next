'use client'

import Card from '@/components/containers/Card'
import React, { useEffect, useMemo, useReducer, useRef } from 'react'

type MemoryCard = {
  id: number
  symbol: string
  isMatched: boolean
}

type GamePhase = 'ready' | 'playing' | 'won'

type GameState = {
  cards: MemoryCard[]
  flippedIndices: number[]
  moves: number
  matchedPairs: number
  elapsedMs: number
  pendingHideMs: number
  phase: GamePhase
}

type Action =
  | { type: 'new-game'; deck: MemoryCard[] }
  | { type: 'flip-card'; index: number }
  | { type: 'advance-time'; ms: number }

const SYMBOLS = ['🍎', '🚀', '🎯', '🎵', '🌙', '⚡']
const TOTAL_PAIRS = SYMBOLS.length
const HIDE_DELAY_MS = 700
const TIMER_TICK_MS = 100
const BOARD_COLUMNS = 4

const buildDeck = () => {
  const base = SYMBOLS.flatMap(symbol => [symbol, symbol])
  const shuffled = [...base]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }

  return shuffled.map((symbol, id) => ({ id, symbol, isMatched: false }))
}

const advanceState = (state: GameState, ms: number): GameState => {
  if (ms <= 0) {
    return state
  }

  const elapsedMs = state.phase === 'playing' ? state.elapsedMs + ms : state.elapsedMs

  if (state.pendingHideMs <= 0) {
    return { ...state, elapsedMs }
  }

  const pendingHideMs = state.pendingHideMs - ms
  if (pendingHideMs > 0) {
    return { ...state, elapsedMs, pendingHideMs }
  }

  return {
    ...state,
    elapsedMs,
    pendingHideMs: 0,
    flippedIndices: []
  }
}

const reducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case 'new-game':
      return {
        cards: action.deck,
        flippedIndices: [],
        moves: 0,
        matchedPairs: 0,
        elapsedMs: 0,
        pendingHideMs: 0,
        phase: 'ready'
      }
    case 'flip-card': {
      if (
        state.phase === 'won' ||
        state.pendingHideMs > 0 ||
        state.flippedIndices.includes(action.index) ||
        state.cards[action.index]?.isMatched
      ) {
        return state
      }

      const nextPhase = state.phase === 'ready' ? 'playing' : state.phase
      const nextFlippedIndices = [...state.flippedIndices, action.index]

      if (nextFlippedIndices.length < 2) {
        return {
          ...state,
          phase: nextPhase,
          flippedIndices: nextFlippedIndices
        }
      }

      const [firstIndex, secondIndex] = nextFlippedIndices
      const firstCard = state.cards[firstIndex]
      const secondCard = state.cards[secondIndex]
      const nextMoves = state.moves + 1

      if (firstCard.symbol === secondCard.symbol) {
        const cards = state.cards.map((card, index) =>
          index === firstIndex || index === secondIndex
            ? { ...card, isMatched: true }
            : card
        )
        const matchedPairs = state.matchedPairs + 1
        return {
          ...state,
          phase: matchedPairs === TOTAL_PAIRS ? 'won' : nextPhase,
          cards,
          moves: nextMoves,
          matchedPairs,
          flippedIndices: []
        }
      }

      return {
        ...state,
        phase: nextPhase,
        moves: nextMoves,
        flippedIndices: nextFlippedIndices,
        pendingHideMs: HIDE_DELAY_MS
      }
    }
    case 'advance-time':
      return advanceState(state, action.ms)
    default:
      return state
  }
}

const getInitialState = (): GameState => ({
  cards: buildDeck(),
  flippedIndices: [],
  moves: 0,
  matchedPairs: 0,
  elapsedMs: 0,
  pendingHideMs: 0,
  phase: 'ready'
})

declare global {
  interface Window {
    render_game_to_text?: () => string
    advanceTime?: (ms: number) => void
  }
}

const MemoryGame = () => {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState)
  const boardRef = useRef<HTMLDivElement>(null)

  const secondsElapsed = Math.floor(state.elapsedMs / 1000)

  const visibleIndices = useMemo(() => {
    return new Set(
      state.cards
        .map((card, index) =>
          card.isMatched || state.flippedIndices.includes(index) ? index : -1
        )
        .filter(index => index >= 0)
    )
  }, [state.cards, state.flippedIndices])

  useEffect(() => {
    const interval = window.setInterval(() => {
      dispatch({ type: 'advance-time', ms: TIMER_TICK_MS })
    }, TIMER_TICK_MS)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    window.advanceTime = (ms: number) => {
      dispatch({ type: 'advance-time', ms })
    }

    window.render_game_to_text = () => {
      const payload = {
        mode: state.phase,
        coordinate_system:
          'Board origin is top-left at row 0 col 0. Rows increase downward, cols increase rightward.',
        board: state.cards.map((card, index) => {
          const row = Math.floor(index / BOARD_COLUMNS)
          const col = index % BOARD_COLUMNS
          const visible = visibleIndices.has(index)
          return {
            index,
            row,
            col,
            state: card.isMatched ? 'matched' : visible ? 'face-up' : 'face-down',
            symbol: visible ? card.symbol : null
          }
        }),
        moves: state.moves,
        matched_pairs: state.matchedPairs,
        total_pairs: TOTAL_PAIRS,
        seconds_elapsed: secondsElapsed
      }
      return JSON.stringify(payload)
    }

    return () => {
      delete window.advanceTime
      delete window.render_game_to_text
    }
  }, [secondsElapsed, state.cards, state.matchedPairs, state.moves, state.phase, visibleIndices])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== 'f') {
        return
      }

      if (!document.fullscreenElement) {
        boardRef.current?.requestFullscreen().catch(() => {})
        return
      }

      document.exitFullscreen().catch(() => {})
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <Card classList='p-4 sm:p-8'>
      <div ref={boardRef}>
        <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6'>
          <div>
            <p className='m-0 text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
              Memory Match
            </p>
            <h2 className='m-0'>
              Match all pairs in the fewest moves
            </h2>
          </div>
          <div className='text-sm text-slate-600 dark:text-slate-300'>
            <strong>{state.moves}</strong> moves | <strong>{secondsElapsed}</strong>s |{' '}
            <strong>{state.matchedPairs}</strong>/{TOTAL_PAIRS} pairs
          </div>
        </div>

        <div className='grid grid-cols-4 gap-3 sm:gap-4' role='grid' aria-label='Memory board'>
          {state.cards.map((card, index) => {
            const isVisible = visibleIndices.has(index)
            return (
              <button
                key={card.id}
                type='button'
                role='gridcell'
                aria-label={`Card ${index + 1}`}
                className='h-20 sm:h-24 text-3xl rounded-md border border-slate-300 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-900 transition-transform hover:scale-[1.02] disabled:hover:scale-100'
                onClick={() => dispatch({ type: 'flip-card', index })}
                disabled={card.isMatched || state.flippedIndices.includes(index) || state.pendingHideMs > 0}
              >
                {isVisible ? card.symbol : '❓'}
              </button>
            )
          })}
        </div>

        {state.phase === 'won' && (
          <p className='mt-6 mb-0 text-emerald-700 dark:text-emerald-400'>
            Completed in {state.moves} moves and {secondsElapsed} seconds.
          </p>
        )}

        <div className='mt-6 flex flex-wrap items-center gap-3'>
          <button
            type='button'
            className='border-0 rounded-sm shadow-lg cursor-pointer text-white py-2 px-6'
            style={{ background: 'var(--linkColor)' }}
            onClick={() => dispatch({ type: 'new-game', deck: buildDeck() })}
          >
            New Game
          </button>
          <span className='text-xs text-slate-500 dark:text-slate-400'>
            Press <code>f</code> to toggle fullscreen.
          </span>
        </div>
      </div>
    </Card>
  )
}

export default MemoryGame
