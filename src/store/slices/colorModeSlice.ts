import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { ColorModeValueType, LIGHT } from '@/lib/constants/colorModeConstants'

export type ModeState = {
  value: ColorModeValueType
  loaded?: boolean
}

const initialState: ModeState = {
  value: LIGHT,
  loaded: false
}

export const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    updateColorMode: (state, action: PayloadAction<ModeState>) => {
      state.value = action.payload.value
    },
    setLoadComplete: state => {
      state.loaded = true
    }
  }
})

export const { updateColorMode, setLoadComplete } = colorModeSlice.actions

export const selectColorMode = (state: RootState) => state.colorMode.value

export default colorModeSlice.reducer
