import { configureStore } from '@reduxjs/toolkit'
import colorModeReducer from './slices/colorModeSlice'
import menuReducer from './slices/menuSlice'

export const store = configureStore({
  reducer: {
    colorMode: colorModeReducer,
    menu: menuReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch