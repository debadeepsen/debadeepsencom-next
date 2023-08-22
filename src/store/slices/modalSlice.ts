import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type ModalState = {
  open: boolean
  text?: string
}

const initialState: ModalState = {
  open: false,
  text: 'Sorry, an unexpected error occurred. Please try to refresh the page.'
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModalOpen: state => {
      const wasOpen = state.open
      state.open = !wasOpen
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    },
    setModalText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
})

export const { toggleModalOpen, setModalOpen, setModalText } = modalSlice.actions

export default modalSlice.reducer
