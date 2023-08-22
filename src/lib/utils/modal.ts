import { store } from '@/store'
import { setModalOpen, setModalText } from '@/store/slices/modalSlice'

export const modalAlert = (text: string) => {
  store.dispatch(setModalText(text))
  store.dispatch(setModalOpen(true))
}
