import { configureStore } from '@reduxjs/toolkit'
// @ts-ignore
import mailReducer from '../features/mailSlice'

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch