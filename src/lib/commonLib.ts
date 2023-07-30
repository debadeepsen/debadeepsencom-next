'use client'

import { ColorModeValueType } from './constants/colorModeConstants'
import { LOCAL_STORAGE_KEYS } from './constants/commonConstants'

export const colorModeUtil = {
  get manualPreferenceSet() {
    console.log({globalThis})
    return !!globalThis.window?.localStorage.getItem(LOCAL_STORAGE_KEYS.COLOR_MODE)
  },
  get value() {
    console.log({globalThis})
    return globalThis.window?.localStorage.getItem(LOCAL_STORAGE_KEYS.COLOR_MODE) as ColorModeValueType
  },
  set: (value: string) => {
    console.log({globalThis})
    globalThis.window?.localStorage.setItem(LOCAL_STORAGE_KEYS.COLOR_MODE, value)
  }
}
