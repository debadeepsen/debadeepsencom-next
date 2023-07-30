import { THEME_COLOR, THEME_COLOR_DARK } from "./commonConstants"

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
  icon?: string,
  menu?: string
}

const LightMode: ColorModeState = {
  bodyBg: '#eee',
  color: '#333',
  sectionBg: '#fff',
  cardBg: '#fff',
  icon: '#333',
  menu: THEME_COLOR_DARK
}

const DarkMode: ColorModeState = {
  bodyBg: 'rgb(24, 22, 28)',
  color: '#ffe',
  sectionBg: 'rgb(32, 28, 38)',
  cardBg: 'rgb(42, 38, 50)',
  icon: '#ccc',
  menu: '#fff'
}

export const ColorModes = {
  [LIGHT]: LightMode,
  [DARK]: DarkMode
}
