import { configureStore } from '@reduxjs/toolkit'
import { countReducer } from './counter/counter-slide'

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
