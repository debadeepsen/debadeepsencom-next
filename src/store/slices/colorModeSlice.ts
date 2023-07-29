import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export type ModeState = {
  value: 'dark' | 'light'
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
