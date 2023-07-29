import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { ColorModeValueType } from '@/lib/constants/colorModeConstants'

export type ModeState = {
  value: ColorModeValueType
}

const initialState: ModeState = {
  value: 'dark'
}

export const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    updateColorMode: (state, action: PayloadAction<ModeState>) => {
      state.value = action.payload.value
    }
  }
})

export const { updateColorMode } = colorModeSlice.actions

export const selectColorMode = (state: RootState) => state.colorMode.value

export default colorModeSlice.reducer
