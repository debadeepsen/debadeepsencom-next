import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export type MenuState = {
  open: boolean
}

const initialState: MenuState = {
  open: false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleOpen: (state) => {
        const wasOpen = state.open
        state.open = !wasOpen
    },
    setOpen: (state,action: PayloadAction<boolean>) => {
        state.open = action.payload
    }
  }
})

export const { toggleOpen, setOpen } = menuSlice.actions

export const selectColorMode = (state: RootState) => state.colorMode.value

export default menuSlice.reducer
