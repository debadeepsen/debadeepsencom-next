'use client'

import { ColorModeValueType, DARK } from './constants/colorModeConstants'
import { LOCAL_STORAGE_KEYS } from './constants/commonConstants'

export const colorModeUtil = {
  get manualPreferenceSet() {
    return !!globalThis.window?.localStorage.getItem(
      LOCAL_STORAGE_KEYS.COLOR_MODE
    )
  },
  get value() {
    return globalThis.window?.localStorage.getItem(
      LOCAL_STORAGE_KEYS.COLOR_MODE
    ) as ColorModeValueType
  },
  set: (value: string) => {
    globalThis.window?.localStorage.setItem(
      LOCAL_STORAGE_KEYS.COLOR_MODE,
      value
    )
    
    const classList = globalThis.window?.document.documentElement.classList

    if (value === DARK) classList.add(DARK)
    else classList.remove(DARK)
  }
}
