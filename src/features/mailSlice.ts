import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MailState {
  sendMessageIsOpen: boolean
}

const initialState: MailState = {
  sendMessageIsOpen: false,
}

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openSendMessage: ({ sendMessageIsOpen }) => {
      sendMessageIsOpen = true
    },
    closeSendMessage: ({ sendMessageIsOpen }) => {
      sendMessageIsOpen = false
    },
  },
})

export const { openSendMessage, closeSendMessage } = mailSlice.actions

export const selectSendMessageIsOpen = (state: MailState) => state.sendMessageIsOpen

export default mailSlice.reducer
