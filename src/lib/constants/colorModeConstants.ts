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
  icon?: string
}

const LightMode: ColorModeState = {
  bodyBg: '#eee',
  color: '#333',
  sectionBg: '#fff',
  cardBg: '#fff',
  icon: '#333'
}

const DarkMode: ColorModeState = {
  bodyBg: '#202022',
  color: '#ffe',
  sectionBg: '#292931',
  cardBg: '#363941',
  icon: '#ccc'
}

export const ColorModes = {
  [LIGHT]: LightMode,
  [DARK]: DarkMode
}
