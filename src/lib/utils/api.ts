'use server'

import { DictionaryEntry } from '@/types/dictionary'
import { IPDetails } from '@/types/types'

export const getIp = async () => {
  const res = await fetch(process.env.IP_API || '')
  const json = await res.json()
  return json as IPDetails
}

export const getWordDetails = async (word: string) => {
  const res = await fetch(process.env.DICTIONARY_API + word)
  const json = await res.json()
  return json[0] as DictionaryEntry
}
