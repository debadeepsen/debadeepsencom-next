import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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
    toggleMenuOpen: (state) => {
        const wasOpen = state.open
        state.open = !wasOpen
    },
    setMenuOpen: (state,action: PayloadAction<boolean>) => {
        state.open = action.payload
    }
  }
})

export const { toggleMenuOpen, setMenuOpen } = menuSlice.actions

export default menuSlice.reducer
