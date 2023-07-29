import { ColorModeValueType } from './constants/colorModeConstants'
import { LOCAL_STORAGE_KEYS } from './constants/commonConstants'

export const colorModeUtil = {
  get manualPreferenceSet() {
    return !!localStorage.getItem(LOCAL_STORAGE_KEYS.COLOR_MODE)
  },
  get value() {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.COLOR_MODE) as ColorModeValueType
  },
  set: (value: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.COLOR_MODE, value)
  }
}