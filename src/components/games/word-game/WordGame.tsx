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
  const [message, setMessage] = useState<string>('')

  const words: string[] = WORD_LIST.split(',')
  const alphabets: string[] = ALPHABETS.split('')

  const progressPercent: number = Math.round(
    (progress / currentWord.length) * 100
  )
  const degrees: number = Math.round((progress / currentWord.length) * 360)
  const puzzleSolved: boolean = progress === currentWord.length

  const reset = () => {
    setCurrentWord('')
    setCurrentGuess([])
    setTries(0)
    setProgress(0)
    setMessage('')
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

    if (puzzleSolved) {
      setMessage(
        `Congratulations! You found the word ${currentWord} in ${tries} tries! Click on the button below to begin a new game.`
      )
    }
  }

  useEffect(() => {
    loadGame()
  }, [])

  return (
    <Card classList='p-6 relative'>
      <h1>Guess the {currentWord.length}-letter word</h1>
      <h3 style={{ marginBottom: '40px' }}>Choose from the letters below</h3>

      {/* <div className='progress-circle'>
        <div className='pc-overlay'>{progressPercent}%</div>
        <div
          className='pc-background'
          style={{
            background: `conic-gradient(#ec826f ${degrees}deg, #ddd ${degrees}deg)`
          }}
        ></div>
      </div> */}

      <div className='text-teal-400 dark:text-teal-200 bg-teal-100/20 py-2 px-6 text-sm absolute top-[6px] right-[6px] rounded-full'>
        {tries} tries
      </div>

      <div className='flex justify-center items-center mb-4'>
        {currentWord.split('').map((l, i) => (
          <input
            key={i}
            readOnly
            className='outline-0 border-0 border-b-2 w-[2vw] md:w-[40px] xl:w-[60px] h-[2vh] md:h-[40px] lg:h-[60px] mx-2 bg-transparent font-bold text-center text-lg'
            style={{ color: THEME_COLOR }}
            value={getGuessedLetter(i)}
          />
        ))}
      </div>

      <div className='button-container'>
        <div
          className='absolute w-full h-full'
          style={{
            pointerEvents: puzzleSolved ? 'all' : 'none'
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
      <div id='msg'>{message}</div>
      <div className='my-2 flex justify-center items-center'>
        <button
          className={
            'm-2 py-2 px-8 border-0 rounded-xs shadow-lg cursor-pointer'
          }
          style={{
            background: THEME_COLOR,
            color: '#fff'
          }}
          onClick={loadGame}
        >
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
