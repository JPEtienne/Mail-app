import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface UserState {
  user: any
}

const initialState: UserState = {
  user: undefined,
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export const { login, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
