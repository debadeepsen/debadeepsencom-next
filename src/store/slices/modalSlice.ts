import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export type ModalState = {
  open: boolean
}

const initialState: ModalState = {
  open: false
}

export const modalSlice = createSlice({
  name: 'modal',
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

export const { toggleOpen, setOpen } = modalSlice.actions

export default modalSlice.reducer
