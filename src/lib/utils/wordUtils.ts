'use server'

import { getWordDetails } from './api'

export const getExamples = async (word: string) => {
  const dictionaryEntry = await getWordDetails(word)
  const examples: string[] = []
  dictionaryEntry.meanings.forEach(m => {
    m.definitions.forEach(d => {
      if (d.example) examples.push(d.example.replaceAll(word, ' __ '))
    })
  })

  return examples
}
