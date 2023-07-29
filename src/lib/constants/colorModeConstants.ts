export const LIGHT = 'light'
export const DARK = 'dark'

export type ColorModeValueType = 'light' | 'dark'

export type ColorModeState = {
  bodyBg?: string
  color?: string
  h1?: string
  h2?: string
  sectionBg?: string
  cardBg?: string
}

const LightMode: ColorModeState = {
  bodyBg: '#eee',
  color: '#333',
  sectionBg: '#fff',
  cardBg: '#fff'
}

const DarkMode: ColorModeState = {
  bodyBg: '#222522',
  color: '#ffe',
  sectionBg: '#333833',
  cardBg: '#444844'
}

export const ColorModes = {
  [LIGHT]: LightMode,
  [DARK]: DarkMode
}
