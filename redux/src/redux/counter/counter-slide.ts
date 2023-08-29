import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
  },
})

export const { increment, decrement } = countSlice.actions
export const countReducer = countSlice.reducer
