import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

interface SelectedMail {
  id: string
  title: string
  subject: string
  description: string
  time: any
}

export interface MailState {
  sendMessageIsOpen: boolean
  selectedMail?: SelectedMail 
}

const initialState: MailState = {
  selectedMail: undefined,
  sendMessageIsOpen: false,
}

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    selectMail: (state, action: PayloadAction<SelectedMail|undefined>) => {
      state.selectedMail = action.payload
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false
    },
  },
})

export const { openSendMessage, closeSendMessage, selectMail } =
  mailSlice.actions

export const selectSendMessageIsOpen = (state: RootState) =>
  state.mail.sendMessageIsOpen

  export const selectOpenMail = (state: RootState) =>
  state.mail.selectedMail

export default mailSlice.reducer
