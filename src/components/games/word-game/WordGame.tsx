'use client'

import { WORD_CONSTANTS } from '@/lib/constants/gameConstants'
import React, { useState, useEffect } from 'react'
import Card from '../../containers/Card'
import './word-game.css'
import { THEME_COLOR } from '@/lib/constants/commonConstants'

const { WORD_LIST, ALPHABETS } = WORD_CONSTANTS

const WordGame = () => {
  const [currentWord, setCurrentWord] = useState<string>('')
  const [currentGuess, setCurrentGuess] = useState<string[]>([])
  const [tries, setTries] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)

  const words: string[] = WORD_LIST.split(',')
  const alphabets: string[] = ALPHABETS.split('')

  const progressPercent: number = Math.round(
    (progress / currentWord.length) * 100
  )
  const degrees: number = Math.round((progress / currentWord.length) * 360)
  const puzzleSolved = () => progress === currentWord.length
  const triesWord = () => (tries == 1 ? 'try' : 'tries')

  const reset = () => {
    setCurrentWord('')
    setCurrentGuess([])
    setTries(0)
    setProgress(0)
  }

  const loadGame = () => {
    reset()

    const rnd: number = Math.floor(Math.random() * words.length)
    setCurrentWord(words[rnd].toUpperCase())
  }

  const getGuessedLetter = (index: number): string => {
    if (currentGuess.includes(currentWord[index])) {
      return currentWord[index]
    }

    return ''
  }

  const getLetterButtonClass = (letter: string): string => {
    return currentGuess.includes(letter)
      ? 'letter-button-disabled'
      : 'letter-button'
  }

  const makeGuess = (letter: string) => {
    if (currentGuess.includes(letter)) return
    setCurrentGuess([...currentGuess, letter])
    setTries(tries + 1)

    const correctGuesses: number = currentWord
      .split('')
      .filter(e => e === letter).length
    setProgress(progress + correctGuesses)
  }

  useEffect(() => {
    loadGame()
  }, [])

  return (
    <Card classList='p-6 relative'>
      <h2>Guess the {currentWord.length}-letter word</h2>
      <p className='mb-4'>Choose from the letters below</p>

      {/* <div className='progress-circle'>
        <div className='pc-overlay'>{progressPercent}%</div>
        <div
          className='pc-background'
          style={{
            background: `conic-gradient(#ec826f ${degrees}deg, #ddd ${degrees}deg)`
          }}
        ></div>
      </div> */}

      <div className='text-teal-600 dark:text-teal-200 bg-teal-400/10 dark:bg-teal-100/10 py-2 px-6 text-sm absolute top-[6px] right-[6px] rounded-full'>
        {tries} tries
      </div>

      <div className='flex justify-center items-center mb-4'>
        {currentWord.split('').map((l, i) => (
          <input
            key={i}
            readOnly
            className='outline-0 border-0 border-b-2 w-[3vw] md:w-[40px] xl:w-[60px] h-[3vw] md:h-[40px] lg:h-[60px] mx-2 bg-transparent text-center text-xs md:text-lg text-slate-600 dark:text-slate-200'
            value={getGuessedLetter(i)}
          />
        ))}
      </div>

      <div className='button-container'>
        <div
          className='absolute w-full h-full'
          style={{
            pointerEvents: puzzleSolved() ? 'all' : 'none'
          }}
        ></div>
        {alphabets.map(l => (
          <button
            key={l}
            className={getLetterButtonClass(l)}
            title={
              currentGuess.includes(l) ? `${l} already picked` : `Pick ${l}`
            }
            style={{ cursor: currentGuess.includes(l) ? 'default' : 'pointer' }}
            onClick={() => makeGuess(l)}
          >
            {l}
          </button>
        ))}
      </div>
      {puzzleSolved() && (
        <div className='my-4 text-center'>
          Congratulations! You found the word{' '}
          <code className='text-bold'>{currentWord}</code> in {tries}{' '}
          {triesWord()}! Click on the button below to begin a new game.
          <button
            className='fas fa-flag ml-2 rounded-full bg-red-200/40 dark:bg-red-200/20 text-red-400 border-0 p-2'
            title='Report word as inappropriate'
          ></button>
        </div>
      )}
      <div className='my-4 flex justify-center items-center'>
        <button
          className={
            'my-4 py-3 px-8 border-0 rounded-sm shadow-lg cursor-pointer text-white text-md'
          }
          style={{ background: 'var(--linkColor)' }}
          onClick={loadGame}
        >
          <i className='fas fa-redo mr-2'></i>
          New Game
        </button>
      </div>
      <div id='credits'>
        <div>
          Word list from{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/'
          >
            https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/
          </a>
        </div>
      </div>
    </Card>
  )
}

export default WordGame
