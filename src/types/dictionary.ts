export type DictionaryEntry = {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License
  sourceUrls: string[]
}

type Meaning = {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: (string | string)[]
  antonyms: (string | string)[]
}

type Definition = {
  definition: string
  synonyms: string[][]
  antonyms: string[][]
  example?: string
}

type Phonetic = {
  text: string
  audio: string
  sourceUrl?: string
  license?: License
}

type License = {
  name: string
  url: string
}
